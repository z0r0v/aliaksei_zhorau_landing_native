/**
 * api
 */
import {getSkills} from '../Api.js';

export const renderSkills = () => {
    getSkills().then((res) => {
        res.forEach((skill, index) => {
            const container = document.querySelector('.skills');

            const box = document.createElement('div');
            box.className = "item";

            const spanTitle = document.createElement('span');
            spanTitle.className = "title";
            spanTitle.textContent = `${skill.name}:`;
            box.append(spanTitle);

            const divLine = document.createElement('div');
            divLine.className = 'line';
            box.append(divLine);

            const spanLine = document.createElement('span');
            spanLine.style.width = `${skill.value}%`;
            divLine.append(spanLine);

            container.append(box);
        });

    });
};
