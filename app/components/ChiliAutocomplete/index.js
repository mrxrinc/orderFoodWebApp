/**
 *
 * ChiliFooter
 *
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import { autocompleteResFood } from '../../api/application/autocomplete';
import { history } from '../../store';
import './style.scss';


let searchTimer;
class ChiliAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      cityId:2,
      loading: false,
      queryResult: []
    };
    this.onChange = this.onChange.bind(this);

  }

  panigaleSuggestionSearch = ({restaurants,foods}) => {
    document.querySelector('.panigale-component-block_get-shadow').classList.add('card_white')
    let suggestionThemp;
    this.closeAllLists();
    suggestionThemp = `
        <div id="${this.id}panigale-suggestion-search__list" class="panigale-suggestion-search__item boxShadow1 round20">
          ${this.state.loading ?
          `<ul class="panigale-suggestion-search__item-ul">
              <li class="panigale-suggestion-search__item-header">در حال جستجو ...</li>
            </ul>` :
            (restaurants.length > 0 || foods.length > 0 ?
              `<ul class="panigale-suggestion-search__item-ul">

                    ${restaurants.length > 0 ?
                      `<li class="panigale-suggestion-search__item-header">رستوران ها</li>`:``
                    }
                    ${restaurants.map((itemDetail, index) =>
                        `<li class="panigale-suggestion-search__item-body panigale-suggestion-search__item-body-restaurant" data-city="${itemDetail.neighborhood.citySlug}" data-slug="${itemDetail.slug}"><i class="icon chilivery-filter-restaurant-type text18 yellow leftP5"></i>${itemDetail.name}</li>`
                      ).join('')
                    }

                    ${foods.length > 0 ?
                      `<li class="panigale-suggestion-search__item-header ${(restaurants.length > 0 && foods.length > 0)?"add-border-top":''}">غذاها</li>`:``
                    }
                    ${foods.map((itemDetail, index) =>
                        `<li class="panigale-suggestion-search__item-body"><i class="icon chilivery-filter-food-type text18 yellow leftP5"></i>${itemDetail.keyword}</li>`
                      ).join('')
                    }
                  </ul>`
              :
              `<ul class="panigale-suggestion-search__item-ul">
                <li class="panigale-suggestion-search__item-header">نتیجه ای یافت نشد</li>
              </ul>`)
      }
        </div>
      `;
    const parent = document.querySelector('.panigale-component-block_get-shadow');
    parent.insertAdjacentHTML('beforeend', suggestionThemp);

    let eventClass = document.querySelectorAll('.panigale-suggestion-search__item-body-restaurant');
    let historyLink = function () {
      history.push(`/${this.getAttribute("data-city")}/${this.getAttribute("data-slug")}/`);
    };
    Array.from(eventClass).forEach(function (element) {
      element.addEventListener('click', historyLink);
    });

  }


  closeAllLists = (elmnt) => {
    let x = document.getElementsByClassName("panigale-suggestion-search__item");
    for (let i = 0; i < x.length; i++) {
      if (elmnt !== x[i]) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  querySuggestion = () => {
    const { query,cityId } = this.state;
    this.setState({ loading: true });
    this.panigaleSuggestionSearch({
      restaurants : [],
      foods       : []
    });
    autocompleteResFood(
      cityId,
      query,
    ).then(response => {
      this.setState({ loading: false });
      if (response.status) {

        this.setState({ queryResult: response.result }, () => {
          this.panigaleSuggestionSearch({
              restaurants : this.state.queryResult["restaurants"].data,
              foods       : this.state.queryResult['foods'].data
            });
        })
      }
    })
  }

  handleKeyUp = (e) => {
    if (e.key !== 'Enter') {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        if (this.state.query.length >= 3) {
          this.querySuggestion();
        }
      }, 300);
    }
  }

  querySubmit = () => {
    const { query } = this.state;

    if (query !== "") {
      history.push(`/restaurants/${this.props.UserPosition.citySlug}/${this.props.UserPosition.slug}/?query=${query}/`);
    }else{
      history.push(`/restaurants/${this.props.UserPosition.citySlug}/${this.props.UserPosition.slug}/`);
    }
  }

  handleKeyPress = (e) => {
    let getShadow = document.querySelector('.panigale-component-block_get-shadow');

    if (e.key === 'Enter') {
      this.closeAllLists(e.target);
      if (getShadow.classList.contains('card_white')) {
        getShadow.classList.remove('card_white');
      }
      this.querySubmit(e);
      this.setState({
        query: ""
      })

    }
  }

  componentDidMount() {
    let getShadow = document.querySelector('.panigale-component-block_get-shadow');
    document.addEventListener("click", e => {
      this.closeAllLists(e.target);
      if (getShadow !== null && getShadow.classList.contains('card_white')) {
        getShadow.classList.remove('card_white');
      }
    });
  }

  render() {
    const { query } = this.state;
    return (
      <div className="panigale-component-block panigale-suggestion-searcher">
        <div className="panigale-component-block_get-shadow">
          <div className="panigale-suggestion-searcher__inner align-items-center">
            <div className="panigale-suggestion-search wFull">
              <div className="chili-animate-field form-group input">
                <input 
                  id="panigale-suggestion-search__input"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder=" "
                  name="query"
                  autoComplete="off"
                  value={query}
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPress}
                  onKeyUp={this.handleKeyUp}
                />
                <label htmlFor="panigale-suggestion-search__input">جستجوی رستوران یا غذا... </label>
                <i className="chilivery-icon chilivery-filter-food-type text25" style={{color:"rgb(146, 146, 146)"}}/>
              </div>

              <div className="searchBtn topM40 wFull hP20 center">
                <button className="btn btn-success wFull" onClick={this.querySubmit}>مشاهده رستوران ها</button>
              </div>


            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  UserPosition: state.UserPosition.neighborhood
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChiliAutocomplete)