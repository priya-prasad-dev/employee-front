import { Grid, List } from "@mui/material"
import EmpItem from "../EmpItem/EmpItem"
import axios from 'axios'
import { useEffect } from "react"
import {connect} from 'react-redux'
import {showEmp} from '../../redux/empList/emp.action'
const DisplayEmp = ({showemp,getempList}) => {
    useEffect(() => {
      axios.get('http://localhost:8080/show-emp')
      .then(response => showemp(response.data))
    })
    return(
        <>
            <Grid container>
                <List >
                    {
                        getempList.map(
                            emp => <empItem 
                                        key={emp.id}
                                        emp={emp}
                                    />
                        )
                    }
                </List>
            </Grid>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    showemp: empList => dispatch(showemp(EmpList)) 
})
const mapStateToProps = state => ({
    getEmpList: state.emp.empList
})
export default  connect(mapStateToProps,mapDispatchToProps)(DisplayEmp)