import React from 'react';

const Blog = () => {
    return (
        <div className='mx-24'>
            <div className='mt-8 p-4 bg-zinc-300 drop-shadow-2xl'>
                <h1 className='text-2xl mb-2'>Q: what is cors?</h1>
                <p className='text-lg'> Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='mt-8 p-4 bg-zinc-300 drop-shadow-2xl'>
                <h1 className='text-2xl mb-2'>Q: Why are you using firebase? What other options do you have to implement authentication??</h1>
                <p className='text-lg'> Ans: Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more..</p>
            </div>
            <div className='mt-8 p-4 bg-zinc-300 drop-shadow-2xl'>
                <h1 className='text-2xl mb-2'>Q: How does the private route work?</h1>
                <p className='text-lg'> Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading.</p>
            </div>
            <div className='mt-8 p-4 bg-zinc-300 drop-shadow-2xl'>
                <h1 className='text-2xl mb-2'>Q: What is Node? How does Node work?</h1>
                <p className='text-lg'> Ans: Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.</p>
            </div>
        </div>
    );
};

export default Blog;