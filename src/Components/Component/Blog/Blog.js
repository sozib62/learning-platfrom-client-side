import React from 'react';

const Blog = () => {
    return (
        <div className='mx-24'>
            <div className='mt-8 p-4 bg-zinc-300 drop-shadow-2xl'>
                <h1 className='text-2xl mb-2'>Q: what is cors?</h1>
                <p className='text-lg'> Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>

        </div>
    );
};

export default Blog;