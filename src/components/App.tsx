import React, { useState, useEffect } from 'react';
import { mapper } from './utils/mapper';
import { GalleryList } from './GalleryList.jsx/GalleryList';
import { SearchBar } from './SearchBar/SearchBar';
import { Service } from './serviceApi/serviceApi';
import { ToastContainer } from 'react-toastify';
import { Modal } from './Modal/Modal';
import { LoaderSpinner } from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

export const App = ():JSX.Element => {
  const [images, setImages] = useState<{}[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [largeIMG, setLargeIMG] = useState<string | undefined>(''); // виглядає дуже підозріло

  useEffect(() :void => {
    if (query === '') {
      return;
    }
    setLoading(true);
    Service(page, query)
      .then(({ data }) => {
        setImages(ps => [...ps, ...mapper(data)]);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const handlerSubmit = (queue: string):void => {
    if (query === queue) {
      return;
    }
    setImages([]);
    setPage(1);
    setQuery(queue);
  };

  const handlerModal = (largeIMG?: string): void => {
    setLargeIMG(largeIMG);
  };

  const modalWindowClose = ():void => {
    setLargeIMG('');
  };

  const handlerLoadMore = ():void => {
    setPage(ps => ps + 1);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handlerSubmit} />
      {images.length > 0 && (
        <GalleryList images={images} handlerModal={handlerModal} />
      )}
      {loading && <LoaderSpinner />}
      {images.length >= 12 * page && (
        <button onClick={handlerLoadMore} className="Button">
          Load More
        </button>
      )}
      {largeIMG && <Modal largeimg={largeIMG} onClose={modalWindowClose} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};
