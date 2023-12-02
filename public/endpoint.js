const endpointUrl =
  'https://jarms.ahmadiyyanigeria.net/GetCircuitStats?eventYear=2023'

function populateGrid() {
  fetch(endpointUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      const gridRow = document.getElementById('gridRow')
      const total = document.getElementById('total')
      let totalRegistered = 0
      let totalGuests = 0

      data.forEach((item, index) => {
        const gridItem = document.createElement('div')
        gridItem.classList.add('col', 'grid-item')

        totalRegistered += parseInt(item.registrationCount)
        totalGuests += parseInt(item.totalGuests)
        const content = `
                            <h4>${item.circuitName}</h4>
                            <p>Total Members: ${item.totalMember}</p>
                            <p>Registered Members: ${item.registrationCount}</p>
                            <p>Registered Guests: ${item.totalGuests}</p>
                            <p>Percentage: ${item.registeredPercentage}%</p>
                        `
        gridItem.innerHTML = content
        gridItem.classList.add(
          index % 2 === 0 ? 'grid-row-even' : 'grid-row-odd'
        )
        gridRow.appendChild(gridItem)
      })
      total.innerHTML = `<span class="badge rounded-pill text-bg-success mb-3">Total Registered Members: ${totalRegistered}</span> `

      total.innerHTML += `<span class="badge rounded text-bg-dark mb-3">Total Registered Guests: ${totalGuests}</span>`
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error)
    })
}

populateGrid()
