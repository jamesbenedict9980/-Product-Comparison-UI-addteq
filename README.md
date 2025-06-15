Setup Instructions
1.) Clone the Repository or Create Project

npx create-react-app product-compare-app
cd product-compare-app


2) Project Structure

/public
  /imgs                 ← Add your product images here
/src
  /components           ← Home.js
  /data                 ← products.js
  /css                  ← CompareSection.css, ProductCard.css, ProductList.css
  /pages                ← ProductCard, ProductList, CompareSection
  App.js
  index.js


3) Install Dependencies

(Optional) If using icons, Bootstrap or other UI libraries:
npm install bootstrap

Main Dependencies
Dependency	        Version	            Purpose
react	              ^19.1.0	Core        React library for building UI components
react-dom	          ^19.1.0	            React DOM renderer, allows rendering to the browser
react-scripts	       5.0.1	            Scripts and configuration used by Create React App
react-router-dom	  ^7.6.2	            For routing/navigation between pages in React

Testing Libraries
Dependency	                Version	            Purpose
@testing-library/react	    ^16.3.0	            React component testing utilities
@testing-library/jest-dom	  ^6.6.3	            Custom DOM matchers for Jest
@testing-library/dom	      ^10.4.0	            Low-level DOM testing utilities
@testing-library/user-event	^13.5.0	            Simulate user interactions in tests
web-vitals	                ^2.1.4	            For measuring site performance metrics

4) Start the Development Server
npm install
npm start

5) Screen shots of the Output: (Main Page without compare)
![image](https://github.com/user-attachments/assets/d4f4c4ec-20c0-4f65-adb4-592ec1988ddf)

6) Screen shots of the Output: (Main Page with compare)
![image](https://github.com/user-attachments/assets/c0c73bc8-6f89-4140-be91-e01c69ce9bd3)

7) Mobile responsive using grid:
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
![image](https://github.com/user-attachments/assets/d9abe448-6e6c-47a6-9f24-400a822cd942)

8) Implemented localStorage to store compared products, ensuring previously selected items persist even after page refresh.

const [compareIds, setCompareIds] = useState(() => {
  const stored = localStorage.getItem("comparedProducts");
  return stored ? JSON.parse(stored) : [];
});


useEffect(() => {
  localStorage.setItem("comparedProducts", JSON.stringify(compareIds));
}, [compareIds]);
