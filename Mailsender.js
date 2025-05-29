document.getElementById("timestamp").value = new Date().toLocaleString();


fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
        document.getElementById("ip_adres").value = data.ip;

        const form = document.getElementById("bezoekForm");
        const formData = new FormData(form);

        fetch("https://formspree.io/f/mqaqrolk", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log("✅ Bezoekmelding verzonden");
                } else {
                    console.error("⚠️ Fout bij verzenden");
                }
            })
            .catch(error => console.error("❌ Netwerkfout:", error));
    });