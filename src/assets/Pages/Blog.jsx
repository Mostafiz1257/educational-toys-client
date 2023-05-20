import useTitle from "../../hooks/useTitle";

const Blog = () => {
useTitle('Blog')
    return (
        <div className="mt-12">
            <div className="mb-5">
                <h2 className="font-bold text-teal-700">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p> <span className="font-bold">Answer:</span>An access token is a credential that is issued by an authentication server to a client application after successful authentication. It grants the client application permission to access protected resources on behalf of a user. The access token typically has an expiration time and includes information such as the user's identity and any associated scopes or permissions.</p>
                <p>The client application includes the access token in each request to protected resources by adding it to the request headers, such as the Authorization header. The server verifies the access token for each request to ensure that the client has the necessary permissions to access the requested resource. If the access token expires, the client can use the refresh token to obtain a new access token from the authentication server without requiring the user to reauthenticate.</p>
            </div>
            <div className="mb-5">
                <h3 className="font-bold text-teal-700">2.Compare SQL and NoSQL databases?
                </h3>
                <p> <span className="font-bold">Answer:</span>SQL: SQL databases follow a rigid, predefined schema where data is organized into tables with fixed columns and data types. They enforce strict data integrity rules and support relationships between tables through foreign keys.
                    NoSQL: NoSQL databases offer flexible schemas, allowing for dynamic and unstructured data models. They can store data in various formats, such as key-value pairs, documents, graphs, or wide-column stores. NoSQL databases can handle rapidly changing data structures and are well-suited for handling semi-structured or unstructured data.</p>
            </div>
            <div className="mb-5">
                <h3 className="font-bold text-teal-700">What is express js? What is Nest JS</h3>
                <p> <span className="font-bold">Answer: Express:</span>Express is highly flexible, allowing developers to structure their applications according to their specific needs. It does not impose a strict application architecture, leaving the application structure and design choices up to the developers.

                    Overall, Express simplifies the process of building web applications in Node.js by providing a lightweight and modular framework that allows developers to handle routes, middleware, and other common web development tasks efficiently.</p>
                <p> <span className="font-bold">Nest JS:</span>NestJS aims to provide a productive and scalable development experience for building enterprise-grade applications. Its focus on modularity, dependency injection, and TypeScript integration allows developers to create highly maintainable and scalable server-side applications.</p>
            </div>
            <div className="mb-12">
                <h3 className="font-bold text-teal-700">What is MongoDB aggregate and how does it work ?</h3>
                <p> <span className="font-bold">Answer:</span>In MongoDB, the aggregate operation is a powerful tool for data aggregation and transformation. It allows you to perform advanced analytics and computations on data stored in MongoDB collections. The aggregate operation takes a collection of documents as input and applies a sequence of operations to process and reshape the data.
                    <br />
                    The MongoDB aggregate operation works with a pipeline concept, where multiple stages are chained together to transform and manipulate the data. Each stage performs a specific operation on the input documents and passes the transformed result to the next stage in the pipeline. The output of the last stage is the final result of the aggregation.</p>
            </div>
        </div>
    );
};

export default Blog;