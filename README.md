# RideAPI

Simple NodeJS API for a ride service business. Built with express. Uses filesystem to read and write .json files as a mock database.

# API Documentation
GET All for all tables at appropriate urls:
>GET http://localhost:3000/api/trips
>GET http://localhost:3000/api/cars
>GET http://localhost:3000/api/customers
>GET http://localhost:3000/api/documents
>GET http://localhost:3000/api/drivers
>GET http://localhost:3000/api/payments
>GET http://localhost:3000/api/locations

GET by ID for all tables at appropriate urls:
>GET http://localhost:3000/api/trips/1
>GET http://localhost:3000/api/trips/2
>etc.

POST to create a new driver, requires json request body:
>POST http://localhost:3000/api/drivers

PUT to add or update trip note and or vibe, requires json request body:
>PUT http://localhost:3000/api/trips/1 (id)
- example request body:
```yaml
{
	"trip_notes":  "please drop me off at baggage claim",
	"current_vibe": "Jazz Vibes"
}
```
>Some example Usage:
```yaml
GET http://localhost:3000/api/drivers
Content-Type: application/json
Accept: application/json
{
    "id": 1,
    "driver_name": "Steph Festiculma",
    "phone_number": "555-1234",
    "current_car_id": 1,
    "about_driver": "Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018.",
    "driver_photo": "driver-photo-goes-here"
},
{
    "id": 2,
    "first_name": "Jane Doe",
    "phone_number": "555-4321",
    "current_car_id": 2,
    "about_driver": "Jane Doe is a very common name",
    "driver_photo": "driver-photo-goes-here"
},
{
    "id": 3,
    "driver_name": "James Johnson",
    "phone_number": "555-4567",
    "current_car_id": 3,
    "about_driver": "James made this app!",
    "driver_photo": "driver-photo-goes-here"
}

GET http://localhost:3000/api/drivers/1 (id)
Content-Type: application/json
Accept: application/json
{
    "id": 1,
    "driver_name": "Steph Festiculma",
    "phone_number": "555-1234",
    "current_car_id": 1,
    "about_driver": "Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018.",
    "driver_photo": "driver-photo-goes-here"
}

PUT http://localhost:3000/api/trips/1 (id)
Content-Type: application/json
Accept: application/json
REQUEST-BODY
{
	"trip_notes":  "please drop me off at baggage claim",
	"current_vibe": "Jazz Vibes"
}
RESPONSE
[
  {
    "id": 1,
    "driver_id": 1,
    "customer_id": 1,
    "car_id": 1,
    "device_id": 1,
    "number_of_passengers": "1-5",
    "start_location_id": 1,
    "end_location_id": 2,
    "trip_requested_timestamp": "12:34PM",
    "trip_start_timestamp": "12:40PM",
    "trip_end_timestamp": "5:39PM",
    "trip_notes": "please drop me off at baggage claim",
    "estimated_trip_time": 20,
    "wait_time": 6,
    "estimated_fare": "$65-$75",
    "payment_id": 1,
    "trip_status": "complete",
    "current_vibe": "Jazz Vibes"
  },
  {
    "id": 2,
    "driver_id": 2,
    "customer_id": 2,
    "car_id": 2,
    "device_id": 2,
    "number_of_passengers": "1-5",
    "start_location_id": 1,
    "end_location_id": 2,
    "trip_requested_timestamp": "12:34PM",
    "trip_start_timestamp": "12:40PM",
    "trip_end_timestamp": "5:39PM",
    "trip_notes": "please drop me off at arrivals",
    "estimated_trip_time": 20,
    "wait_time": 6,
    "estimated_fare": "$65-$75",
    "payment_id": 1,
    "trip_status": "complete",
    "current_vibe": "Vaporwave Beats"
  }
]