# Generating Reports Using Highcharts and PDF

This README provides instructions on how to generate reports using Highcharts and PDF through a Node.js server. The server accepts JSON data via a POST request, generates charts using Highcharts, converts them to base64-encoded PNG images, and then includes these images in a PDF document.

## Prerequisites

- Node.js installed on your machine.
- Postman or a similar tool to make HTTP requests.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Server**

   ```bash
   npm start
   ```

The server will start and run at http://localhost:3000.

## Making a POST Request with Postman

![image](https://github.com/dan-matthew/pdf-generator/assets/98776588/2a61422a-26a7-4e72-aba4-b4ffbbf57772)


1. Open Postman

2. Create a New POST Request

- Set the request type to POST.
- Set the URL to http://localhost:3000/generateMIReport.

3. Set the Request Body

- Select the Body tab.
- Choose raw.
- Paste the json in the [sample-request](sample-request) file

4. Send the Request

- Click the Send button to make the POST request.
- The server will process the request, generate the charts, and return a PDF document with the charts included.

## Conclusion

By following these steps, you will be able to generate reports using Highcharts and PDF through a Node.js server. Use Postman to send the JSON data and receive a PDF document with the generated charts.
