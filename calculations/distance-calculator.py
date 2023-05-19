import requests
import json
from dotenv import dotenv_values
from geopy.distance import geodesic
from geopy.geocoders import Nominatim

# Load variables from .env file
config = dotenv_values(".env")
city_api_key = config["CITY_API_KEY"]

def calculate_distance(map_of_coordinates):
    """
    Calculates the distance between the first two cities in the given hash map of coordinates.

    Args:
        map_of_coordinates (dict): A dictionary where the keys are cities and the values are 
        coordinates of the city, on the form of a (latitude, longitude) tuple.

    Returns:
        float: The distance between the first two cities in kilometers.
    """
    
    coordinates_iterator = iter(map_of_coordinates.values())

    # Create location objects for the two first cities in the city coordinate hash map
    coordinate_object_one = next(coordinates_iterator)
    coordinate_object_two = next(coordinates_iterator)

    # Calculate the distance using geodesic function
    distance = geodesic(coordinate_object_one, coordinate_object_two).kilometers

    return distance


def check_city_existence(city_name):
    """
    Checks the existence of a city with the given name.

    Args:
        city_name (str): The name of the city to check.

    Raises:
        ValueError: If the city does not exist.
    """
    geolocator = Nominatim(user_agent="my_geocoder")
    location = geolocator.geocode(city_name)

    if location is None:
        raise ValueError(f"The city '{city_name}' does not exist.")
        

def find_coordinates_from_city(cityName):
       """
        Retrieves the latitude and longitude coordinates for a given city using an API.

        Args:
            cityName (str): The name of the city to retrieve coordinates for.

        Returns:
            tuple (float): A tuple containing the latitude and longitude coordinates of the city.

        Raises:
            ValueError: If an error occurs while making the API request.
    """
    api_url = 'https://api.api-ninjas.com/v1/city?name={}'.format(cityName)
    response = requests.get(api_url, headers={'X-Api-Key': city_api_key})
    
    if response.status_code != requests.codes.ok:
        print("Error:", response.status_code, response.text)
    
    payload_json = json.loads(response.text)
    latitude = payload_json[0]['latitude']
    longitude = payload_json[0]['longitude']
    
    return (latitude, longitude)

