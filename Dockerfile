FROM node:18-alpine AS installedDeps

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

# FROM node:18-alpine AS stage-build

# WORKDIR /app

# COPY package.json yarn.lock ./
# COPY --from=installedDeps /app/node_modules ./node_modules
# COPY . .

# RUN npm run build

# FROM node:18-alpine AS stage-prod

# WORKDIR /app

# COPY package.json yarn.lock ./
# COPY --from=stage-build /app/dist ./dist
# COPY --from=installedDeps /app/node_modules ./node_modules

EXPOSE 4000

CMD ["yarn", "start"]