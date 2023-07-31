import nodata from "../../assets/Nodata.gif"
import {Image} from "antd";

function NoData({status}) {
    return (
        <div className={'text-center'}>
            <Image preview={false} width={200} src={nodata} alt={'nodata'}/>
            <p>
                Your <strong>{status==="progress" ? "progressed" : status}</strong> items would be appeared here.
                No data has been added yet!
            </p>
        </div>
    );
}

export default NoData;