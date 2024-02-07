# Fabble

Fabble is a highly scalable chat application developed using Next.js 14 for the frontend and Node.js for the backend. It incorporates various technologies such as Redis, PostgreSQL, Prisma (ORM), TypeScript, WebSockets, and Kafka to provide a seamless and responsive chat experience.

## Features

- **Real-time Communication**: Implemented using WebSockets (socket.io) to ensure a responsive chat experience.
- **Efficient Message Broadcasting**: Utilizes Redis Pub/Sub for seamless communication across servers, enhancing scalability and efficiency.
- **High-throughput Message Handling**: Integrated Kafka for handling high-throughput scenarios, ensuring reliable message processing and storage in PostgreSQL.
- **Optimistic Updates**: Provides a smoother user experience by reflecting user actions in the UI before server confirmation.
- **Infinite Queries**: Utilizes infinite queries to efficiently fetch and display messages, providing an uninterrupted chat experience.

## Technologies Used

- **Frontend**: Next.js 14
- **Backend**: Node.js
- **Database**: PostgreSQL with Prisma (ORM)
- **Real-time Communication**: WebSockets (socket.io)
- **Message Queue**: Kafka
- **Data Caching**: Redis
- **Language**: TypeScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vednp/fabble.git
```

2. Install dependencies:

```bash
cd fabble
npm install
```

3. Set up environment variables. You may need to create a `.env` file in the root directory and define the following variables:

```plaintext
PORT=3000
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
POSTGRES_HOST=your_postgres_host
POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_postgres_db
KAFKA_HOST=your_kafka_host
KAFKA_PORT=your_kafka_port
```

4. Start the development server:

```bash
npm run dev
```

## Usage

After installing and starting the application, you can access the chat application through your browser. Users can register, log in, and start chatting with others in real-time.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
