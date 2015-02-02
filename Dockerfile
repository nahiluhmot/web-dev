FROM ubuntu:14.04

# Install system dependencies
RUN apt-get -y update
RUN apt-get -y install nginx nodejs npm git
RUN ln -sfv "$(which nodejs)" /usr/bin/node

# Install language dependencies
RUN npm install -g gulp bower

# Add source code
ADD . /opt/app
RUN useradd --create-home --user-group app
RUN chown -R app:app /opt/app/

# Build the app
WORKDIR /opt/app
USER app
RUN npm install
RUN bower install
RUN gulp clean
RUN gulp build

# Default command
USER root
CMD /usr/sbin/nginx -c /opt/app/nginx.conf -g "daemon off;"
