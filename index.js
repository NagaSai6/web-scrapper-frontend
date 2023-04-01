// initiate particle js

window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};

// handle form submission

const handleFormSubmission = (e) => {
  e.preventDefault();
  const homepageRegex =
    /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.(?:[a-zA-Z0-9-]{2,})(?:\/)?$/;
  if (homepageRegex.test(document.getElementById("url").value)) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://example.com/api/data");
      xhr.responseType = "json";
      xhr.onload = function () {
        if (xhr.status === 200) {
          // Handle the successful response here
          const responseData = xhr.response;
          console.log("Response data:", responseData);
        } else {
          // Handle errors here
          console.error("Request failed with status:", xhr.status);
        }
      };
      xhr.send();
    } catch (error) {}
  }else{
    alert('Enter Homepage url')
  }
};
