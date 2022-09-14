![The Truth is Out There](/Resources/banner.png)

# UFOs: The Truth is Out There!

## Project Overview

* Purpose is well defined.

The purpose of this project is to build a webpage to display UFO data in a table that can be filtered by visitors. The project will use HTML, CSS, Javascript, and D3. The dataset provided for the table has been provided in a Javascript array. Using JavaScript and D3 the array will be processed into an HTML table for viewing & filtering.

## Results

The UFO web page has been designed to be dynamic to allow visitors to filter the data table. This allows visitors to quickly view the information they are looking for. The images below show the web page along with a brief description of how to use the filters.

### Web Page Top Section

When the web page loads, the image below is what will be seen at the top of the page. One item of note is the "UFO Sightings" link at the top left of the page. Clicking this link, will reload all of the page elements including the table section.

![UFO Web Page](/Resources/UFO_Web_Page_top.png)

### Web Page Table Section 

Shown below is the data table and the filters section of the web page. A couple of things to be aware of when using the filters.

1. By default, the table shows all available data.
1. Case Sensitivity: In the current version of the web page seatch criteria must be entered using lower case letters.
2. Search Criteria: Enter one or more search criteria then hit the enter key to filter the table. 
3. To reload the table, either delete all search criteria OR click the "UFO Sightings" link in the top left corner to reload the page.

![UFO Web Page](/Resources/UFO_Web_Page_table.png)


## Summary

One drawback of this web page is that while the table is dynamic the data available is static. In other words, an interested visitor to the webpage will quickly run out of data to view. To address this shortcoming, a data source that is updated regularly should be found or if necessary so the data is constantly being kept up to date.

### Further Development

Below are a couple of opportunities to improve the webpage to make it more presentable and improve usability.

Problem: 
* In the current version of the page, visitors must enter all text search criteria in lower case. If the user uses any capitalization the search returns no results.
Solution: 
* Add code to manipulate the case of the search criteria so filtered results will be returned even when vistors enter all caps or mixed caps criteria.

Problem:
* Several fields in the provided dataset do not use any capitalization. To be taken seriously the webpage needs to look professional and well edited.
Solution:
* Process the dataset to add uppercase letters where appropriate. For example, State & Country codes should be all caps while City names should have proper capitalization.