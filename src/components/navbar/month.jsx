import {previousMonth, nextMonth, setMonth} from 'src/store/month/action'
import {selectCurrentMonth} from 'src/store/month/reducer'
import {connect} from 'react-redux'
import styles from './month.module.scss'
import getMonth, {months} from 'src/utils/getMonth'
import {ChevronUpIcon, ChevronDownIcon, CheckIcon} from '@heroicons/react/solid'
import {Listbox, Transition} from '@headlessui/react'
import {Fragment} from 'react'

const mapStateToProps = state => {
  return {
    month: selectCurrentMonth(state)
  }
}

function Option ({option, selected}) {
  const isSelected = option === selected
  return (
    <Listbox.Option className={`${styles.listboxOption} ${isSelected ? styles.activeListBoxOption : null}`} value={option}>
      <div className={`${styles.optionIcon} ${isSelected && styles.active}`}><CheckIcon className={styles.icon} /></div>
      <div className={styles.optionTitle}>{getMonth(option)}</div>
    </Listbox.Option>
  )
}

function Month ({month, previousMonth, nextMonth, setMonth}) {
  return (
    <Listbox value={month} onChange={setMonth}>
      {({open}) => (
        <div className={styles.monthContainer}>
          <div className={`${styles.month} ${open && styles.activeMonth}`}>
            <div className={styles.action}>
              <button
                onClick={() => previousMonth(month)}
                className={styles.button}
                >
                <ChevronUpIcon className="h-5 w-5" />
              </button>
            </div>
            <Listbox.Button className={styles.text}>
              <h3 className={styles.title}>{getMonth(month)}</h3>
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className={styles.listboxOptions}>
                {Array(months.length)
                  .fill(null)
                  .map((_, index) => (<Option key={index} option={index} selected={month} />))}
                </Listbox.Options>
              </Transition>
              <div className={styles.action}>
                <button
                  onClick={() => nextMonth(month)}
                  className={styles.button}
                  >
                  <ChevronDownIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
      )}
    </Listbox>
  )
}

export default connect(mapStateToProps, {
  nextMonth, previousMonth, setMonth
})(Month)
