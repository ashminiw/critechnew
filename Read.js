import firebase from 'firebase/app'
import 'firebase/firestore'
import { useAuth } from '../auth'


const ReadDataFromCloudFirestore = () => {
    const { user } = useAuth()
    const readData = () => {
        try {
            firebase
                .firestore()
                .collection('ashweer')
                .doc(user.id)
                .onSnapshot(function (doc) {
                    console.log(doc.data())
                })
            alert('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <div style={{ margin: '5px 0' }}>
            <button onClick={readData} >Read Data From Cloud Firestore</button>
        </div>
    )
}

export default ReadDataFromCloudFirestore