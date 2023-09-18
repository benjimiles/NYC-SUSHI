// admin.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const AdminDashboard = () => {
  const [foodItems, setFoodItems] = useState([]);
  const router = useRouter();
  const [newItem, setNewItem] = useState({ name: '', price: '', image_url: '' });
  const [editMode, setEditMode] = useState({});
  const [showNewItemFields, setShowNewItemFields] = useState(false);
  const [itemErrors, setItemErrors] = useState({});

  // Simulated auth check
  useEffect(() => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    if (!decoded.isAdmin) {
      router.push('/');
    }
  }, []);

  // Fetch Food Items from Django API
  useEffect(() => {
    fetch('http://localhost:8000/food-items/')
      .then((response) => response.json())
      .then((data) => setFoodItems(data.items))

      .catch((error) => console.error('Error fetching food items:', error));
  }, []);

  const addFoodItem = (pk) => {
    fetch('http://localhost:8000/food-items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject('Failed to add item. Maybe some fields are missing?');
        }
        return response.json();
      })
      .then((data) => {
        setFoodItems([...foodItems, data]);
        setNewItem({ name: '', price: '', image_url: '' });
        setItemErrors({ ...itemErrors, [pk]: null }); // Clear any previous errors for this PK
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
        setItemErrors({ ...itemErrors, [pk]: error }); // Set error for this PK
      });
  };

  // Function to delete a food item
  const deleteFoodItem = (id) => {
    fetch(`http://localhost:8000/food-items/${id}/`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setFoodItems(foodItems.filter((item) => item.id !== id));
        } else {
          console.error('Failed to delete item');
        }
      })
      .catch((error) => console.error('Error deleting food item:', error));
  };

  const toggleNewItemFields = () => {
    setShowNewItemFields(!showNewItemFields);
  };
  const toggleEditMode = (id) => {
    setEditMode((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const updateFoodItem = (id) => {
    const updatedItem = foodItems.find((item) => item.id === id);
    fetch(`http://localhost:8000/food-items/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedItems = foodItems.map((item) => (item.id === id ? data : item));
        setFoodItems(updatedItems);
      })
      .catch((error) => console.error('Error updating item:', error));
  };
  const updateField = (id, field, value) => {
    const updatedItems = foodItems.map((item) => (item.id === id ? { ...item, [field]: value } : item));
    setFoodItems(updatedItems);
  };
  return (
    <div>
      <NavBar />

      <div className="w-full h-auto text-center md:py-8 lg:py-10 text-white bg-black">
        <h1 className="text-4xl">Admin Dashboard</h1>
        <h2>Food Items</h2>
        <button onClick={toggleNewItemFields} className="my-2 p-2 text-2xl border-2 border-white rounded-xl">
          Add Item
        </button>
        {showNewItemFields && (
          <div className="py-4 text-xl">
            <input
              className="m-2 text-black"
              type="text"
              placeholder="New Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              className="m-2 text-black"
              type="text"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <input
              className="m-2 text-black"
              type="text"
              placeholder="Image URL"
              value={newItem.image_url}
              onChange={(e) => setNewItem({ ...newItem, image_url: e.target.value })}
            />
            <button onClick={addFoodItem} className="m-2">
              Add
            </button>
          </div>
        )}
        {foodItems.map((item) => (
          <div key={item.id} className="py-2 flex  items-center justify-center">
            {editMode[item.id] ? (
              <>
                <input type="text" value={item.name} onChange={(e) => updateField(item.id, 'name', e.target.value)} />
                <input type="text" value={item.price} onChange={(e) => updateField(item.id, 'price', e.target.value)} />
                <input
                  type="text"
                  value={item.image_url}
                  onChange={(e) => updateField(item.id, 'image_url', e.target.value)}
                />
              </>
            ) : (
              <div className=" pb-5 ">
                <span className="mx-2 text-xl ">{item.name}</span>
                <img src={item.image_url} alt={item.name} className="w-40 object-cover m-auto" />

                <span className="mx-2 text-xl">Price: {item.price}</span>
              </div>
            )}
            {/* Modify Button Start */}
            <button
              onClick={() => {
                toggleEditMode(item.id);
                updateFoodItem(item.id);
              }}
              className="mx-2 p-2 text-lg border-2 border-white rounded-xl bg-green-400"
            >
              {' '}
              {editMode[item.id] ? 'Save' : 'Modify'}
            </button>
            {/* Modify Button End */}
            {/* Delete Button Start */}
            <button
              onClick={() => deleteFoodItem(item.id)}
              className="mx-2 p-2 text-lg border-2 border-white rounded-xl bg-red-400"
            >
              Delete
            </button>
            {/* Delete Button */}
            {itemErrors[item.id] && <div className="error mt-2 text-red-500">{itemErrors[item.id]}</div>}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
