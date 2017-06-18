'use strict'

import { translate } from 'react-i18next'
import PropTypes from 'prop-types'

import { locations, countries } from './../services/places'
import { UiSelect } from './../components/ui'

const RankingFilter = ({
  countrySelected,
  country,
  selectState,
  stateSelected,
  state,
  selectCity,
  citySelected
}) => {
  return (
    <div className="filter">
      <div className="filter-select">
        <UiSelect
          label="Country"
          options={countries}
          placeholder="Select your country"
          inputSelected={countrySelected}
        />
      </div>

      <div className="filter-select">
        <UiSelect
          label="State"
          options={locations[country]}
          placeholder="Select your state"
          handleSelectChange={selected => selectState(selected)}
          inputSelected={stateSelected}
        />
      </div>

      <div className="filter-select">
        <UiSelect
          label="City"
          options={locations[country][state].cities}
          placeholder="Select your city"
          handleSelectChange={selected => selectCity(selected)}
          inputSelected={citySelected}
        />
      </div>

      <style jsx>{`
        .filter {
          display: flex;
          justify-content: space-between;
          margin-top: 100px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .filter-select {
          flex-basis: calc(33.33% - 15px);
        }
      `}</style>
    </div>
  )
}

RankingFilter.propTypes = {
  countrySelected: PropTypes.object,
  country: PropTypes.string,
  selectState: PropTypes.func,
  stateSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  state: PropTypes.number,
  selectCity: PropTypes.func,
  citySelected: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default translate(['common'])(RankingFilter)
