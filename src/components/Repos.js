import React, {useContext} from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import {RiGitRepositoryLine} from 'react-icons/ri';
import { MdOutlineDescription, MdLocationOn, MdLink } from 'react-icons/md';

const Repos = () => {
    const { gitRepos } = useContext(GithubContext);

  return (
    <Wrapper>
     
      


      <div className='links'>
       {
          gitRepos.map((repo, index) => {
            const {name, html_url, avatar_url, description} = repo;

            return (
            <>    
                <p>
                    <RiGitRepositoryLine/>
                    {name}
                </p>
                <p>
                    {
                        description ? <><MdOutlineDescription/> {description}</>  : null
                    }

                </p>
                <a href={html_url} style={{marginBottom: "20px"}}>
                    <MdLink/>
                    {html_url}
                </a>
            </>    
               
            )
          })
       }
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
	background: var(--clr-white);
	padding: 1.5rem 2rem;
	border-top-right-radius: var(--radius);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	position: relative;
	&::before {
		content: 'Repositories';
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		background: var(--clr-white);
		color: var(--clr-grey-5);
		border-top-right-radius: var(--radius);
		border-top-left-radius: var(--radius);
		text-transform: capitalize;
		padding: 0.5rem 1rem 0 1rem;
		letter-spacing: var(--spacing);
		font-size: 1rem;
	}
	header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		column-gap: 1rem;
		margin-bottom: 1rem;
		img {
			width: 75px;
			height: 75px;
			border-radius: 50%;
		}
		h4 {
			margin-bottom: 0.25rem;
		}
		p {
			margin-bottom: 0;
		}
		a {
			color: var(--clr-green-dark);
			border: 1px solid var(--clr-primary-5);
			padding: 0.25rem 0.75rem;
			border-radius: 1rem;
			text-transform: capitalize;
			letter-spacing: var(--spacing);
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: var(--clr-primary-5);
				color: var(--clr-white);
			}
		}
	}
	.bio {
		color: var(--clr-grey-3);
	}
	.links {
		p,
		a {
			margin-bottom: 0.25rem;
			display: flex;
			align-items: center;
			svg {
				margin-right: 0.5rem;
				font-size: 1.3rem;
			}
		}
		a {
			color: var(--clr-green-dark);
			transition: var(--transition);
			svg {
				color: var(--clr-grey-5);
			}
			&:hover {
				color: var(--clr-green-light);
			}
		}
	}
`;

export default Repos;
