import texts from '../../texts/texts_no';

const statusMessage = status => {
    const statusMessages = texts.stationTable.status;
    switch (status) {
        case 'LOADING' :
            return statusMessages.loading;
        case 'ERROR':
            return statusMessages.error;
        case 'DATA_COLLECTED':
            return statusMessages.dataCollected;
        default:
            return '';
    }
};

export default statusMessage;