import Link from 'next/link';
import StyledNotLink from './NotLinkWords';
import StyledPaginationLink from './PaginationLinkWords';

const Pagination = ({maxCount, currentPage = 1}) => {
  let links = [];

  for (let i = 1; i < maxCount + 1; i++) {
    links.push(i);
  }

  return links.map(link => {
    if (link === parseInt(currentPage)) {
      return <StyledNotLink key={link}>{link}</StyledNotLink>;
    }

    if (link === 1) {
      return (
        <Link href="words" key={link} passHref>
          <StyledPaginationLink>{link}</StyledPaginationLink>
        </Link>
      );
    }

    return (
      <Link href={`words?page=${link}`} key={link} passHref>
        <StyledPaginationLink>{link}</StyledPaginationLink>
      </Link>
    );
  });
};

export default Pagination;
