import swal from "sweetalert";
const setDataToLs = () => {
    const dataFromLs = localStorage.getItem('donate-info');
    if (dataFromLs) {
        return JSON.parse(dataFromLs);
    }
    return [];
}

const handleDonate = dataOfDonation => {
    const checkDataFromLs = setDataToLs();
    const showOnce = checkDataFromLs.find(data => data.id === dataOfDonation.id);
    if (!showOnce) {
        checkDataFromLs.push(dataOfDonation);
        localStorage.setItem('donate-info', JSON.stringify(checkDataFromLs));
        swal("Great Work!", "You donated for good!", "success");
    }
    else{
        swal("Error!", "You can't donate twice!", "error");
    }

}
export { handleDonate, setDataToLs };