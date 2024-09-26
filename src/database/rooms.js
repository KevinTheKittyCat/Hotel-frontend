

const rooms = [
    {
        id: 1,
        reference: "A1",
        price: 100,
        type: "single",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 1,
        name: "Romslig enkeltrom",
    },
    {
        id: 2,
        reference: "A2",
        price: 150,
        type: "double",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 2,
        name: "Romslig dobbeltrom",
    },
    {
        id: 3,
        reference: "A3",
        price: 200,
        type: "family",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 4,
        name: "Romslig familierom",
    },
    {
        id: 4,
        reference: "A4",
        price: 250,
        type: "suite",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 2,
        name: "Romslig suite",
    },
    {
        id: 5,
        reference: "A5",
        price: 300,
        type: "suite",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 2,
        name: "Romslig suite",
    },
    {
        id: 6,
        reference: "A6",
        price: 350,
        type: "suite",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 2,
        name: "Romslig suite",
    },
    {
        id: 7,
        reference: "A7",
        price: 400,
        type: "suite",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 2,
        name: "Romslig suite",
    },
    {
        id: 8,
        reference: "A8",
        price: 450,
        type: "suite",
        image: "https://via.placeholder.com/150",
        description: "A room near the sea, with a beautiful view",
        capacity: 2,
        name: "Romslig suite",
    },
]

const bookings = [
    {
        id: 1,
        roomId: 1,
        fromDate: new Date(new Date().setDate(new Date().getDate() + 3)),
        toDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        guest: {
            name: "John Doe",
            email: "j@d.no",
            phone: "12345678",
        }
    },
    {
        id: 2,
        roomId: 2,
        fromDate: new Date(new Date().setDate(new Date().getDate() + 10)),
        toDate: new Date(new Date().setDate(new Date().getDate() + 14)),
        guest: {
            name: "Jane Doe",
            email: "",
            phone: "87654321",
        }
    },
    {
        id: 3,
        roomId: 3,
        fromDate: new Date(new Date().setDate(new Date().getDate() + 17)),
        toDate: new Date(new Date().setDate(new Date().getDate() + 21)),
        guest: {
            name: "John Doe",
            email: ""
        }
    }
]

export async function getRooms() {
    return rooms;
}

export async function getRoomById(id) {
    return rooms.find(room => room.id === id);
}

export async function getBookingsById(id) {
    return bookings.map(booking => {
        return {
            id: booking.id,
            roomId: booking.roomId,
            fromDate: booking.fromDate,
            toDate: booking.toDate,
        }
    });
}