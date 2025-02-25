# Stage 1: Build the application
FROM node:20-slim AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm install firebase
RUN npm install -g firebase-tools
# Set environment variable for Firebase API key
# ARG FIREBASE_API_KEY
# ENV FIREBASE_API_KEY=${FIREBASE_API_KEY}
RUN echo $FIREBASE_API_KEY

# Build the application
RUN npm run build

# Stage 2: Create the final production image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only necessary dependencies
RUN npm install --omit=dev

# Expose the port the app will run on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
