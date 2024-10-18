/** 
 * @example
 * {
 * "id": 1,
 * "reference": "1",
 * "price": 100,
 * "type": "Single",
 * "image": "https://via.placeholder.com/150",
 * "description": "Single room with a single bed",
 * "capacity": 1,
 * "name": "Single Room"
 * }
*/
export type RoomType = {
    id: string;
    reference: string;
    price: number;
    type: string;
    image: string;
    description: string;
    capacity: number;
    name: string;
};


/**
 * @example
 * {
 * "id": 1,
 * "roomId": 1,
 * "fromDate": "2022-01-01T00:00:00.000Z",
 * "toDate": "2022-01-02T00:00:00.000Z",
 * "guest": {
 * "name": "John Doe",
 * "email": "
 * "phone": "1234567890"
 * }
 * }
 */
export type BookingType = {
    id: string;
    roomId: number;
    fromDate: Date;
    toDate: Date;
    guest: {
        name: string;
        email: string;
        phone: string;
    }
};

export type RoomsState = {
    byId: { [key: string]: RoomType };
    allIds: string[];
    all: RoomType[];
  };
  
