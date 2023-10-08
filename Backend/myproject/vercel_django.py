# vercel_django.py

from django.core.handlers.asgi import get_asgi_application
from http.server import BaseHTTPRequestHandler, HTTPServer
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "your_project.settings")
application = get_asgi_application()

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        response = application(self.environ, self.start_response)
        self.wfile.write(response)

def handler(event, context):
    server = HTTPServer(('', 3000), Handler)
    server.serve_forever()
