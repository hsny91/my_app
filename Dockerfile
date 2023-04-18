# STAGE: final image
FROM registry.access.redhat.com/ubi8/nodejs-16-minimal

# use yarn for installation
RUN npm install -g yarn

# Copy dependencies file for node
COPY package.json yarn.lock ./
RUN yarn install --production

# copy compiled application
COPY . .

# start node server
CMD /usr/libexec/s2i/run