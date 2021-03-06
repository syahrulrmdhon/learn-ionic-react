import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const API_KEY = "b4ed13d5c8e240cfa7cdb37e4944bccd";
    const BASE_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
    axios
      .get(BASE_URL)
      .then((res) => res.data)
      .then((data) => {
        if (isMounted) {
          setData(data.articles);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Mak News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.map((item: any, key: number) => (
          <IonCard key={key}>
            <img src={item.urlToImage} />
            <IonCardHeader>
              <IonCardTitle>{item.title}</IonCardTitle>
              <IonCardSubtitle>{item.author}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{item.content}</p>
              <IonButton href={item.url}> Read</IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
