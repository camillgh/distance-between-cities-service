def findDistance(cities):

    map_of_coordinates = {}
    
    for city in cities:
        
        check_city_existence(city)
        
        map_of_coordinates[city] = find_coordinates_from_city(city) 
        
    
    distance = calculate_distance(map_of_coordinates)
    
    return distance


# TODO use pycomments
# TODO better error handling! 

