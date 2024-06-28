// {{{To add custom  scrollbar to any page this is how you can add }}}

// Add this JSX to your component file
//  import React from 'react';
import "./Scrollbar.css"; // Make sure to import the CSS file
const CustomScrollbarComponent = () => {
  return (
    <div
      className="custom-scrollbar"
      style={{ height: "auto", overflowY: "scroll" }}
    >
      {/* Content here will have the custom scrollbar */}
      <p>Content with custom scrollbar...</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit
        vitae incidunt quibusdam dignissimos odit, rem, doloribus excepturi
        aliquid maiores deserunt. Laboriosam dolorem molestias et sint iure
        veniam odio dolore?
      </p>
      {/* More content */}
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        quod placeat possimus, officiis dolores ad totam non quas deleniti!
      </h1>
      {/* <img src='https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain'></img>
      <img src='https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain'></img>
      <img src='https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain'></img>
      <img src='https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain'></img>
      <img src='https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain'></img>
      <img src='https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain'></img>
      <img src='https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain'></img> */}
    </div>
  );
};
export default CustomScrollbarComponent;
