def findDistance(cities):
    """
    Calculates the distance between two cities.

    Args:
        cities (list): A list of city names.

    Returns:
        float: The distance between the cities in kilometers.

    Raises:
        ValueError: If a city in the list does not exist.

    """

    map_of_coordinates = {}
    
    for city in cities:
        
        check_city_existence(city)
        
        map_of_coordinates[city] = find_coordinates_from_city(city) 
        
    
    distance = calculate_distance(map_of_coordinates)
    
    return distance
