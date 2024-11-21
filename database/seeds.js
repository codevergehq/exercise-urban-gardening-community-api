const mongoose = require('mongoose');
const connectDB = require('./db');
const Garden = require('../models/Garden.model');

const gardens = [
  {
    name: 'Rooftop Oasis',
    location: 'New York City, NY',
    size: 100,
    type: 'Rooftop',
    plants: ['Tomatoes', 'Lettuce', 'Basil', 'Mint']
  },
  {
    name: 'Community Garden Paradise',
    location: 'Los Angeles, CA',
    size: 500,
    type: 'Community',
    plants: ['Carrots', 'Kale', 'Cucumbers', 'Strawberries']
  },
  {
    name: 'Balcony Bloom',
    location: 'Chicago, IL',
    size: 20,
    type: 'Balcony',
    plants: ['Herbs', 'Chives', 'Parsley', 'Thyme']
  },
  {
    name: 'Urban Farm Haven',
    location: 'Houston, TX',
    size: 1000,
    type: 'Urban Farm',
    plants: ['Squash', 'Peppers', 'Eggplant', 'Okra']
  },
  {
    name: 'Vertical Garden Tower',
    location: 'Philadelphia, PA',
    size: 50,
    type: 'Vertical',
    plants: ['Lettuce', 'Spinach', 'Arugula', 'Swiss Chard']
  },
  {
    name: 'Courtyard Garden Retreat',
    location: 'Phoenix, AZ',
    size: 200,
    type: 'Courtyard',
    plants: ['Citrus Trees', 'Figs', 'Pomegranates', 'Herbs']
  },
  {
    name: 'Indoor Garden Sanctuary',
    location: 'Seattle, WA',
    size: 30,
    type: 'Indoor',
    plants: ['Microgreens', 'Sprouts', 'Wheatgrass', 'Mushrooms']
  },
  {
    name: 'Schoolyard Garden Education',
    location: 'Miami, FL',
    size: 300,
    type: 'Schoolyard',
    plants: ['Sunflowers', 'Peas', 'Radishes', 'Carrots']
  },
  {
    name: 'Office Garden Productivity',
    location: 'Denver, CO',
    size: 40,
    type: 'Office',
    plants: ['Snake Plants', 'Pothos', 'Spider Plants', 'Peace Lilies']
  },
  {
    name: 'Restaurant Garden Fresh',
    location: 'New Orleans, LA',
    size: 150,
    type: 'Restaurant',
    plants: ['Herbs', 'Microgreens', 'Edible Flowers', 'Heirloom Tomatoes']
  }
];

// Define function to seed the database