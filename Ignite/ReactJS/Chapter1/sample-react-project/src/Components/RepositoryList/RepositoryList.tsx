import React, { useEffect, useState } from 'react';
import RepositoryItem from '../RepositoryItem/RepositoryItem'
import '../../styles/styles.scss';


// https://api.github.com/devbersi/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

const RepositoryList = () => {
    const  [repositories, setRepositories] = useState<Repository[]>([]);  

    useEffect(() => {
        fetch(' https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className='repository-list'>
            <h1>Lista de Repositório</h1>


            <ul>
            {repositories.map(Repository => {
                return <RepositoryItem key={Repository.name} repository={Repository} />
            })}
            </ul>
        </section>
    );
}

export default RepositoryList;