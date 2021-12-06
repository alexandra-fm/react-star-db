import React, { Component } from "react"

import Spinner from "../Spinner"
import ErrorIndicator from "../ErrorIndicator"

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
    }

    componentDidMount() {
      //const { getData } = this.props

      getData()
        .then(data => {
          this.setState({
            data,
          })
        })
        .catch(this.onError)
    }

    onError = err => {
      this.setState({ error: true })
    }

    render() {
      const { data, error } = this.state

      if (error) {
        return <ErrorIndicator />
      }

      if (!data) {
        return <Spinner />
      }
      return <View {...this.props} data={data} />
    }
  }
}

export default withData
