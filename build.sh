#!/bin/bash
# Load environment variables from .env file
export $(cat .env | xargs)
# Run the build command
yarn build

