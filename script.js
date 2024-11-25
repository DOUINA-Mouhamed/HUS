function copyAddress() {
    const contractAddress = document.getElementById("contractAddress").innerText;

    // Use Clipboard API for modern browsers
    navigator.clipboard.writeText(contractAddress).then(function() {
        alert("Contract address copied!");
    }).catch(function(err) {
        console.error("Unable to copy: ", err);
        alert("Failed to copy address.");
    });
}
