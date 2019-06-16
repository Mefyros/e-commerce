import React from 'react';
import ClassService from '../../Service/ClassService';
import CategoryService from '../../Service/CategoryService';
import SubCategoryService from '../../Service/SubCatService';

// /c/9/13/(20,21)

export default class Menuccsc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            cardData: [],
        }

        console.log(this.props.match.params);
    }

    componentDidMount = async () => {
        const { classes, categorie, subcategorie } = this.props.match.params;
        let cla, cat, subCat;

        if (Number.isInteger(parseInt(subcategorie))) {
            subCat = await SubCategoryService.getById(subcategorie);
            console.log('Sub Cat');
            console.log(subCat);
        } else if (Number.isInteger(parseInt(categorie))) {
            cat = await CategoryService.getById(categorie);
            console.log('Cat');
            console.log(cat);
        } else if (Number.isInteger(parseInt(classes))) {
            cla = await ClassService.getById(classes);
            console.log('Class');
            console.log(cla);
        }
    }

    setStartStateData = (title, cardData) => {
        this.setState({ title, cardData });
    } 

    render() {
        return (
            <p>Ccsc</p>
        )
    }
}