import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mb-10 w-3/4 mx-auto my-20">
        <div>
          <h1 className="font-semibold text-2xl my-4 ">
            1.What are the different ways to manage a state in a React
            application?
          </h1>
          <p>
            Managing state in your React apps isn’t as simple as using useState
            or useReducer. Not only are there are a lot of different kinds of
            state, but there often dozens of ways of managing each kind. Which
            should you choose? In this guide, we will uncover the several kinds
            of state in your React apps that you might not be aware of, plus how
            to manage them in the most effective way.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl my-4 ">
            2. How does prototypical inheritance work?
          </h1>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl my-4 ">
            3. What is a unit test? Why should we write unit tests?
          </h1>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl my-4 ">
            4. React vs. Angular vs. Vue?
          </h1>
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
