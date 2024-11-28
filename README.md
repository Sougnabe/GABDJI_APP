DaylyHelper
DaylyHelper is an application designed to simplify your daily tasks by using data obtained via external APIs.

Features
Interactive data presentation with sorting, filters and searches.
Intuitive user interface for a better experience.
Instructions to run the application locally
Prerequisites:
Node.js and npm installed (for dependencies if necessary).
Access to a valid API key for the services used.
Steps:
Clone the repository:

bash
Copy code
git clone <repository_url>
cd <repository_directory>
Place the necessary files (index.html, script.js, styles.css) in the root directory.

Open the index.html file in a browser:

bash
Copy code
open index.html
Make sure you have an internet connection to access external APIs.

Steps to deploy the application on the servers
Installation on Web01 and Web02:
Clone the repository on each server:

bash
Copy code
ssh <user>@<server_ip>
cd /var/www/html
git clone <repository_url> .
cp index.html script.js styles.css /var/www/html/
Configure the web server (Apache/Nginx) to serve files from /var/www/html.

Restart the web service:

bash
Copy code
sudo systemctl restart apache2 # For Apache
sudo systemctl restart nginx # For Nginx
Load Balancer Configuration (Lb01):
Modify HAProxy configuration:

haproxy
Copy code
frontend http_front
bind *:80
default_backend servers

backend servers
balance roundrobin
server web01 <web01_ip>:80 check
server web02 <web02_ip>:80 check
Check and restart HAProxy:

bash
Copy code
sudo haproxy -f /etc/haproxy/haproxy.cfg -c
sudo systemctl restart haproxy
Access the application via the Load Balancer:

arduino
Copy code
http://<load_balancer_ip>
Information about the APIs used
API 1: [Name [API name]
Function: [Description of what it does].
Documentation link: [Link to official documentation].
API 2: [API name]
Function: [Description of what it does].
Documentation link: [Link to official documentation].
Issues encountered and solutions
Issue: Lost SSH private key
Impact: I had to recreate my SSH configurations and start over some of my work.
Solution:
Generate a new SSH key pair:
bash
Copy code
ssh-keygen -t rsa -b 2048
Update the public key on GitHub.
Save the new keys in a secure location to avoid future loss.
Additional notes
For security reasons, API keys and sensitive data are not included in this repository. Make sure to configure them before running the application.
If you encounter API-related errors (e.g. request limits), see the documentation for possible solutions.