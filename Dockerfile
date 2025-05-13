# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy the website files to the container
COPY . /usr/share/nginx/html

# Ensure the container exposes port 80
EXPOSE 80

# Add a health check (optional but recommended)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1