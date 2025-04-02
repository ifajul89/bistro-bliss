import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Bliss | Blogs</title>
      </Helmet>
      <div className="container mx-auto px-3 md:px-0">
        <h3 className="font-cursive rounded-2xl border-4 bg-white px-4 py-3 text-center font-semibold md:text-base lg:text-lg">
          BLOGS
        </h3>
        <div className="my-5 space-y-5 md:my-10">
          <div className="space-y-5 rounded-3xl border-2 border-gray-400 p-5 md:p-10">
            <h3 className="text-xl font-semibold md:text-3xl">
              <span className="font-extrabold text-primary">~ </span>
              What is One way data binding?
            </h3>
            <p className="font-light text-gray-600 md:text-lg">
              One-way data binding is a concept often associated with web
              development and user interfaces, particularly in the context of
              front-end frameworks and libraries like AngularJS, Angular, React,
              and Vue.js. It refers to the process of binding data from the
              source (usually a data model) to the target (typically a UI
              element) in such a way that changes in the source data are
              reflected in the target, but not the other way around.
            </p>
          </div>
          <div className="space-y-5 rounded-3xl border-2 border-gray-400 p-5 md:p-10">
            <h3 className="text-xl font-semibold md:text-3xl">
              <span className="font-extrabold text-primary">~ </span>
              What is NPM in node.js?
            </h3>
            <p className="font-light text-gray-600 md:text-lg">
              NPM, which stands for "Node Package Manager," is a package manager
              and ecosystem for JavaScript and Node.js applications. It is the
              default package manager that comes bundled with Node.js, making it
              an integral part of the Node.js development environment. NPM is
              used to install, manage, and share packages (libraries, modules,
              and dependencies) for Node.js and front-end JavaScript
              applications.
            </p>
          </div>
          <div className="space-y-5 rounded-3xl border-2 border-gray-400 p-5 md:p-10">
            <h3 className="text-xl font-semibold md:text-3xl">
              <span className="font-extrabold text-primary">~ </span>
              What are the difference between MongoDB database and MySQL?
            </h3>
            <p className="font-light text-gray-600 md:text-lg">
              here is a simpler explanation of the differences between MongoDB
              and MySQL: MongoDB is like a big box of Lego blocks, where you can
              build different structures by combining the blocks in any way you
              like. This makes it great for storing all kinds of data, even if
              it doesn't fit neatly into a table. MySQL is like a traditional
              filing cabinet, where you have to put each piece of paper in the
              right drawer. This makes it great for storing organized data that
              needs to be easily searchable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
