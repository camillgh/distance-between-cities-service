import requests
import json
from dotenv import dotenv_values
from geopy.distance import geodesic
from geopy.geocoders import Nominatim

# Load variables from .env file
config = dotenv_values(".env")
city_api_key = config["CITY_API_KEY"]

def calculate_distance(map_of_coordinates):
    
    coordinates_iterator = iter(map_of_coordinates.values())

    # Create location objects for the two first cities in the city coordinate hash map
    coordinate_object_one = next(coordinates_iterator)
    coordinate_object_two = next(coordinates_iterator)

    # Calculate the distance using geodesic function
    distance = geodesic(coordinate_object_one, coordinate_object_two).kilometers

    return distance


def check_city_existence(city_name):
    geolocator = Nominatim(user_agent="my_geocoder")
    location = geolocator.geocode(city_name)

    if location is None:
        raise ValueError(f"The city '{city_name}' does not exist.")
        

def find_coordinates_from_city(cityName):

    api_url = 'https://api.api-ninjas.com/v1/city?name={}'.format(cityName)
    response = requests.get(api_url, headers={'X-Api-Key': city_api_key})
    
    if response.status_code != requests.codes.ok:
        print("Error:", response.status_code, response.text)
    
    payload_json = json.loads(response.text)
    latitude = payload_json[0]['latitude']
    longitude = payload_json[0]['longitude']
    
    return (latitude, longitude)

