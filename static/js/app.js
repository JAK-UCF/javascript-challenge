let UFOsightings = data;

function showSightings(UFOsightings){
  d3.select("tbody").html("");
  UFOsightings.forEach((occurrence) => {
    let row = d3.select("tbody").append("tr");
    Object.values(occurrence).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}
showSightings(UFOsightings);

function handleClick() {
  d3.event.preventDefault();
  let searchDate = d3.select("#datetime").property("value");
  let searchCity = d3.select("#city-search").property("value").toLowerCase();
  let searchState = d3.select("#state-search").property("value").toLowerCase();
  let searchShape = d3.select("#shape-search").property("value").toLowerCase();
  let searchComment = d3.select("#comment-search").property("value").toLowerCase();

  let apply = []
  if (searchDate){
    apply = UFOsightings.filter((occurrence) => occurrence.datetime === searchDate);
    if (searchCity) {
      apply = apply.filter((occurrence) => occurrence.city === searchCity);
      if (searchState) {
        apply = apply.filter((occurrence) => occurrence.state === searchState);
        if (searchShape) {
          apply = apply.filter((occurrence) => occurrence.shape === searchShape);
          if (searchComment) {
            apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
          }
        }
        else if (searchComment) {
          apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
        }
      }
      else if (searchShape) {
        apply = apply.filter((occurrence) => occurrence.shape === searchShape);
        if (searchComment) {
          apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
        }
      }
      else if (searchComment){
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
    }
    else if (searchState) {
      apply = apply.filter((occurrence) => occurrence.state === searchState);
      if (searchShape) {
        apply = apply.filter((occurrence) => occurrence.shape === searchShape);
        if (searchComment) {
          apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
        }
      }
      else if (searchComment) {
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
    }
    else if (searchShape) {
      apply = apply.filter((occurrence) => occurrence.shape === searchShape);
      if (searchComment) {
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
      else if (searchComment) {
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
    }
    else if (searchComment) {
      apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
    }
  }
  else if (searchCity){
    apply = UFOsightings.filter((occurrence) => occurrence.city === searchCity);
    if (searchState) {
      apply = apply.filter((occurrence) => occurrence.state === searchState);
      if (searchShape) {
        apply = apply.filter((occurrence) => occurrence.shape === searchShape);
        if (searchComment) {
          apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
        }
      }
      else if (searchComment) {
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
    }
    else if (searchShape) {
      apply = apply.filter((occurrence) => occurrence.shape === searchShape);
      if (searchComment) {
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
      else if (searchComment){
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
    }
    else if (searchComment) {
      apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
    }
  }
  else if (searchState) {
    apply = UFOsightings.filter((occurrence) => occurrence.state === searchState);
    if (searchShape) {
      apply = apply.filter((occurrence) => occurrence.shape === searchShape);
      if (searchComment) {
        apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
      }
    }
    else if (searchComment) {
      apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
    }
  }
  else if (searchShape) {
    apply = UFOsightings.filter((occurrence) => occurrence.shape === searchShape);
    if (searchComment) {
      apply = apply.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
    }
  }
  else if (searchComment) {
    apply = UFOsightings.filter((occurrence) => occurrence.comments.toLowerCase().includes(searchComment));
  }
  // else showSightings(UFOsightings); // does not work to display full table if all fields blank and button clicked...
  showSightings(apply);
}
d3.select("#filter-btn").on("click", handleClick);
