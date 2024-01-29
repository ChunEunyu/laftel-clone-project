import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { GrNext } from "react-icons/gr";
import Button from 'react-bootstrap/Button';

import './HomeSlider.css'

const HomeSlider = () => {

    const animationList = [
        {   // 라그나 크림슨
            logo:"https://image.laftel.net/carousel/814653a2-cdc7-4776-aac2-c820c3c51e98.png?Expires=1706005194&Signature=eGapCFyyR-DgVTItDORwe71A0ZCoZQISL1miKa-vcWBd4Nxm7GxuPNhHB1OEZ~PkxfszOugkGEbmL5RHw~3G4LuQSEeC-bWJBykpf3JDrUH4xcGAjbHrRUtKIo~6xbqm44KOp19JiWhYOrkLXhOvamwHWfDvQTvdnucdLS82Yos-X0yxgEN8LTZVzZFbYN9owmH7qb6V0ZPj3waxy-slNTKtYeExbCgUs2U5a3S3QHZybZO2wSiYG1F3fV~6p29IS4vhMhmNO7iRoj1mIE3F6MERpOgIR4eFF8XnnZSM2fJkL6hVPQekWbzBpEgXB~o2B2G0WEdWA1o3rDMyBAKjOg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A", 
            pc_img:"https://image.laftel.net/carousel/2f7d20d3-b996-4fa5-9b3a-c8d69d79202b.jpg?Expires=1706005194&Signature=lZAke6hJ2S5mKx7OzEn5fw01TIpocrEFvhKtaQ~HTNZcnDrZGhT7QeZXKu54DExaxXbWbf-RINR9PTxBAyFCQe~kegqxb-8~ZR6tmx58ikhAPPiwU2dM29jqNlw~3GRcQLT4xg2toJzHP2jC7ZGqGkjohPj-p7d9PjuZ1UW5wpr8bjabKeT9LKXP-SVaSCojj~CeIcL0gBaFG54qacunhSrRWRGUtlQUNj3P9DGiyR1Mqw81A3C3Kqg0Ac7X-dE3NkB6YnBE6zQb3OT1hUkV7C3UhnkU0~DrKdZFXuXO6C2OeybY0m84dQpp9qqUqisds~ugFLEqQLF2sSe2kjCXNA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            mobile_img:"https://image.laftel.net/carousel/fc39ae5f-6a7d-41e0-bce4-26931309b1d2.jpg?Expires=1706005194&Signature=OzPSvvUh6bUTfxMZzw8wT7KoPlSgNIht9AHTGAYOLaQG1iV8t~9fjAY9-BgZjvJlP7EAoHzRTDc3rHD9eaZgHggZrQkRwGy4SNC~3BZ6s3aQ056Ijz3960tFbKGZdVwHqBZ0hVoKq~IZucLg2-KKO2l82NdjnnClbPs5aRiKTFxmdPTGCQIZPqwWiFen5tbmYBpxzWd1bd016Q5G8yPWiKAfJcOcdj8uxmtvPr3xP-uDG~8NQ9rS-85ndKmVhtf3mvysC8p-DdDAeossgK4-laPUgJGPVu77mOTyzHA~lZXyctt4Kh0JCWyda8c1wNG~8nCLAbRYr6XsnIkrr-mjdg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            desc:"미래의 내가 가깝게 느껴진다",
        },
        {   // 사랑하는 소행성
            logo:"https://image.laftel.net/carousel/c6e8ba85-640f-4d05-ad83-9ce30a79f549.png?Expires=1706005194&Signature=OdhYasUbHlQtGoBkF2TFqCBo3s7SCHdFQDbXXEaNew17ZThqb4~Mr3jo93XVOfuPHgyOmXgZ8VetgxPOIuqWPs2MyyhUzOcibJuay-rHfEQsl3nLuWqAeJrkFQ2zi8O9c0SJ5sALaDr9IfDjXuPYLu19phM6Ak0HZN98Pv6Z15s9MenzfWKaujW8Eu~e1x~RWXcRSTN7JQE4J3tB6NcpoTVTOZWThfJITjL1Rtf8vI26iDMElWAIJSV06uSRs8Ha6x27vZHql-qRf4bgol5v0pGIREVwvLKR8AU3ZDl-mdtBkxhB4obi-wjKA7eRRQY6Qv~TPtxZkU-ETh70uA5qOg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A", 
            pc_img:"https://image.laftel.net/carousel/6d75f50f-f6df-4bb2-8bf5-63d9dcbaa0be.jpg?Expires=1706005194&Signature=BzWLHz4YyINgEohW6a9eivt-cRS1y7bRor9PBGb5zKnrrVa~QBD8DjE-ms1e~Gi3Q7RFvlzzu6fhe2jeuYccPgQDAOgdzIkYoSmwCAC~eOAHGtcdd6M7OCaVXCX9D3JRbcQN5MOEzcFzzw1sO62iBIL3uWf647THImm5VE1ayumtknkhkD-P4lGpHciduRv6F4mMYV72APr9Bv1Yh2fzagnfWCDabgdcIOXUptTeIRWSWWbXLaOG1xd8GNZc8ZAU1lQ1fOCsAJ3vd~CFKcp4HmldU9fLcM-EotrvaUHcuMwBmEXsT7FP9uZP~Yn00UMtpSxGdSHOd-3lWa49LQMChQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            mobile_img:"https://image.laftel.net/carousel/caaeae54-3742-403f-b36a-5ed29a139322.jpg?Expires=1706005194&Signature=D003zywisNUxzcVyFWXiltwRah8i39erEK2q3UvNf3Dj2IFJLewgYTcNbUxlRN-TbnYmVeEtM0NKg~xKVbXr3V9wDvAfkt6-ty4jPKZTR0DDX~jSJlnXOZipw1DW~v7cUi9kJYJuL3jCrU0vQCmUrriiHHlVpOckxLEEcGKlJE4HqvHADv1LkAs~rOIPiOJB8nCvsMXvTQDCBHWBjBqhTk4N2grmaeVyGr6OhkEFed2grE~X2ZjPW-3ckPQ0~oxERzPzVQ4QcGunFQHSmD1lFrkyVFlBPYwcFoUJsGpwXX5IWAS1AAzDHZo0BNsiF3yKaRtxwohuLEUbHvQhgN3uNg__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            desc:"어릴 적 약속을 지키고 싶은 소녀의 소행성 찾기 START!"
        },
        {   // 휴일의 악당
            logo:"https://image.laftel.net/carousel/d0801ddd-b7d6-4cc2-b848-f5772a354940.png?Expires=1706005194&Signature=SRAtEi34aoyfIYbmNGGcvVzg~nddR8c343~AKwVoJpZvONUw1MQokARd0H4DSl6NGpKxj9MzZM-KabSix3fGAjctvp4eM~plbgqlv9LYkOhphOiGn3vL1~UEiEmFNVDUzmW8dNghcglHarMUFFeCrmDh24Vo-kW5bwEfqwV-NS7VzrTgf6dZp9EwRx9WIsRiLzV0WRrGUPfEfWgl0GPV38Hdq68un4~LKfFoYTkHJy6E9omyuNEH1~ZzcVod65dMZ9hWQ4cjdA5uhta~B3vsoufspBVr2nf2tdi~1XfZ~iqiTKx4oAcc-uHHlj3eR4VtUVjVc35YWsjJvufdykEDaA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A", 
            pc_img:"https://image.laftel.net/carousel/f7e53227-ac75-4e5a-95d6-c274fd6a34e3.jpg?Expires=1706005194&Signature=Nc6Z6Ohy2VSBFfazVoj4ioxgonLYYxIzQXDo-3zaiFzh3U4P6-ZlRTzgj2RIMRcrB09TKlQ2NvbB7Tw4CRaKSdNuNkK7sXLZ3V-3PQVXqRFUWpkppxGFu0I3~Z1-RUqh4nyAtqovESOGIVGPCwFhc7fQM2cPZosS76htqGZSbjwBUXC7Phhle8~iO6keVvXKil7JZmzK0OZHOkP1hZDrZHjEDOpgnf1e7Yk6dCjl8natw~hTogKo5G9tRYwUHctAtDwjA5I6WiPEG1QW4fLcANUXm7w7vZX~qBuGC9lozCG6lJ5vsU3YTfLzKiG8RYlIhcqKo-EYdV0VKl40-0sQcw__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            mobile_img:"https://image.laftel.net/carousel/876f0419-0615-402b-83c9-8e26ca1a1b28.jpg?Expires=1706005194&Signature=IzYUjFFiUAQmaeIdbYLgtZXiKbxrpizs67dLOmKeVHRQMizQdcQkbKgomkwUpPhBV7OlOutNiSbroU0FR0ezdN~3xTYQL9i6O4br8ymmm~zmMhB5c5A5yCee02Y6ITjpI6hEAGdkH3C0HdqyoqEYksphfSN9Pb9fb-7W1QZt-u-Y48JAXsjnpWX-yn7wBavW7AHUpI~aoaQGN2AYVaJf8VtMHv7az6KQwXrL5CssyyaC~WzkB2aekEwh-ZuAgDeV1MdW401tlBbnjMue4pjAGg41gRqTMfB1y46iOCl~UKZRIJ5UjlET1yEjyNbWIFw4l54LBFibz70QOeG8NJpiIA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            desc:"휴일엔 연락하지 말랬잖아!"
        },
        {   // 루프 7회차 ~~
            logo:"https://image.laftel.net/carousel/dd330528-202f-4edc-ad3c-a1351d5fd47c.png?Expires=1706005194&Signature=RVWUlvxQjzr29pnDfL~JA6-0-C34PHRBeWP9LTdBM7I4ub-p5puRhm6KYUeVSAc5cD5Z9mL5u-0rVsk9uwStq9ptU6aweIaRCx5kTJNqkUVuBvZV-MP4OhDJGccVxEzEFM6uOKGMGDEWDFXYTyUmI1zUS5h04ro1yL2vTVYuOeifnkE9bChl2tAuzJlW2BV04L0OrlJHI1p54hUNh9ULSv5ou-VvAvceIqA-do9uLQmmcHzEFG5AU5SIQnvjMk9GV31M5tbb7rVSc1YQP9YXhYfb168AeERCoEZHOyh6JN69XZmFCIRuTnheR4nhv2HGTsQIgBwG6Nd-S2s0MtoAfA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A", 
            pc_img:"https://image.laftel.net/carousel/d0bbaa07-1304-4c36-8950-e006e702a82c.jpg?Expires=1706005194&Signature=VcmZkpX0r~ABcjFHzaSTjs07d7gANtMZExD1X4KpEhPaRRJHf2QSs4dWLQPZrMBI58XguKaFQ0TtQxi5HlOcGo88zaedxU-pqcpb00FKF7V5Siz1YrdXKtkj45PzVA1J1iiHfEVAXcEOElOpexlH3idE4-KcLPSyaFwoj3EmfhM-CCdad6wv~yqd8w5izwqCS3jJHsaqF5sUb5DBd5wsPLJ2dyrxej36pwKUeETnsjooy5MA5G-1g5~fhwy44wpL~XPRTyrhpkA-Z-9Amsa2kRxpHQvE33A-qgM~We3tHJT3xBTcm9VV6ldhZ3o28-X2eRi2wvV2LxoGULv6bPjGhQ__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            mobile_img:"https://image.laftel.net/carousel/a6eb5791-4cd1-4239-bbc1-5b01602b3595.jpg?Expires=1706005194&Signature=EOb6Y6Tgr-fzPblcp5EQiPIe-tFXHkTWhtj33dzFp3gdEMRCefA7m9xzMpZDyvoT1lAz71w2Cr9n7fh34Mij6Ju9ylTeF7PVASWIVk7k5cILAeDuwoABzyqblOC0sIjex0eyxeMt6j0cIwTsxUu5R7gXld36vlUpl-UWHPIf0zirMO5oB48HD1uBgRXG0VAQT1gkqscHQN3ByfHP8RVkV4WXUojuxeZTc7XvqmBqeGaIuWIYvjfGpFwKGBFXVSgBJn6CCuiunPLlDbBu2qhL8jyWVea9G5lJT8p4C6O6u3ff2ZyHHAQO8DuMjYoJwgwb-WlSv8YwcyQ2DWnvvTIb8g__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            desc:"제 인생에서 가치 있는 게 뭔지는 제가 정해요"
        },
        {   // 원치않는 불사의 모험가
            logo:"https://image.laftel.net/carousel/b4af9778-65e4-4bd0-991d-c1e3f3b6da99.png?Expires=1706005194&Signature=hDIIZDIqjpWzkk5EG39vRNeWqLZ2um074z5INQQ0HrN0msuiNxv6Vm2q3N07aDAaohz-JmzXz~W7h02MQiR-AzVsUjXVxSt34uu-eMB46SfacylGMmoNaeM5zXau3NozX7mpzHTP1rKTNjN728MQ7yYRgxvt84yl9rngkiUGPmra6uk3C1kcIRtTM14-tBzO7x0zldhS28jriUoYvV4aSDNhmcUTEXfLN~4SmxpbqzSgTVrUHg3kuyhjHBEQ5iRJd87ONX6MpceDHAYJjNR03jgZgOTS2B0Ahg0rosp8ticm~dwAJng5WnTugnysQqOdklQ74Nk9tIO~5egahgxBgA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A", 
            pc_img:"https://image.laftel.net/carousel/50ffab71-8015-4a43-80ff-f9ffb70e35b1.jpg?Expires=1706005194&Signature=G2h1NRVmXEePhHv8Jx6Jn24Pdo0llLFMFoLJsVo8vDtd1U033PrIM7Uoc-5W7~8Y9VECMYgjNX9aLRBiYNBfT7j9tbnNNtIM3snA~AJh0~NLjMlulp2ZQ-eUcxpc8rxEFfBc3LkvK4cmpUVBFbOLusXtxVHONYHsjo1A1ojbeP3D-WlmE19rMq1E1uCCoyR7uGlylMi~Y5Nri8HU9XhFcOAQwWd30-kVPn3Pf1LSpRvxiRWUH9US3-2Jr4Oe6texFEvI6ssigyuog5tSHW03CI51ATPOhJoaP4wVfaDiBcuLzzM4BoAqpjEa8M63aaFcUz09UaKcODE7yqLvb2YKDw__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            mobile_img:"https://image.laftel.net/carousel/dce322f6-54e2-4934-b9d4-41b32031001e.jpg?Expires=1706005194&Signature=P7RIay-ecPZRsMQ7~sVLIvnHHZns9mubSsJMtDRBkjagt3C56qPsqcCPhWqllcGjndCEJ~NZkNBroFDNIC9kNXIv7q1zN9zrkKAd2jiWdIvoRlqrC9G2gkUuLGfNrQZ~xjAagFjc4cV5aKV3Soqu0fqPH2JqVFB4tQrr4oh0~v0qCE58xUXVyY-1Xw8sWVtXEt6knKe8UFX~Hn7TVj04~c2TE32G5K3aBrbF060z2mlM9SwZoKe38PFS~lYakSI9gsCm6WdXVDNXNkXMhXhAcJ6XwZ8F~pnOCh27VurilreeRZ32a5HX1kZfEFxBq76G~SHo-ywE7DvSjMUH4t9aig__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            desc:"인생은 렌트처럼"
        },
        {   // 나 혼자만 레벨업
            logo:"https://image.laftel.net/carousel/8b44d59a-bffb-42d4-a514-65336c73dc1b.png?Expires=1706005194&Signature=nUyzFMPDt0ZUDls2J5JhEmC95B5eOs1m5Qg2P93g-ilAbTTPL3AugbyokdGkUl8ZYXT0-wOpidLkWTEvOtAF2LngBZRo46-xNMwiTtstqdkPyeleZu667pUKxVpsVOi8de-sXtOKCb2vVMbwgxXf44AZLsj4Or8aUquF6vdJg3tv0s636rNxbllPlW3nm9s5QLTt4x93JXLczwbX1yb9DMqpnp2J32RleUYDMqX8f8km3lSeegGEC3r68PiUBkwH0qKy~L6wnlZpKaLjElMyBwGUl0DjiVzDfZ4oGTDrrLI~YMU0xhJPU1VFbgghS97DHzl9q1hIaatucdtuw2zwcw__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A", 
            pc_img:"https://image.laftel.net/carousel/a3d70950-d4f2-4709-851b-9cf8f8cf06bd.jpg?Expires=1706005194&Signature=Km3hP0vCV7oU1wpuI54u0EVbX-OozhNVqnE2jr320qxTnWBM4zki6IzOclQMkDpA8hQVzq0FO1N4NnMAqKdXqGEm9AIQ-X9zvr5FuJF-BP4TS8Xww7MRPIUOU5E3ZqRzsGdIWoyDx2UQjMZoIgqjV~K~9-ouDdGqmhNFClXsEbjaNEebRYqlcZtds5L6N6idmKcUEl-20b3TizzaAJogQTdAWIHF0pl4luEpPY4cY0wVcStzdDoG9K~5ukS1LrlcJ5n273p52fKr48KamtpDp8axVu2sAGE~Rw7q4X2wj9sXpHPBjZ3LNSqdUuFrauFA1du~dzpdAHd0kSgI5eCn1A__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            mobile_img:"https://image.laftel.net/carousel/83f9c2b6-f674-4e27-a7ee-30989daf816e.jpg?Expires=1706005194&Signature=MhVHEV1kfXQ7sqwEmPz9NhQShP~UT5jUCnM3TC9UyH8yxfmU6iQUm3f9EKmifWN1lA7pwj~SdLqdXMnd8TIMgv-T0c6ZA5xqKSauA7JjITu17~CJrAAYyICKTU9sgZ3LfVA-6YJeJUd~qoufAihK-9b4zdZYyIp2o7k9qbJybVybbecAB-ZcwXrr0NvzQOv43UwoDWj2huZS-vF09E3TUWW5YJvG4ZgonMTN8V6OTGWeUq-0kCtnIRIeeiLMdmi~EXjmxxjRCu6ZltLq8FBJW0rSvDQbMX68TyJkzp-YhHTPAD~wBWtLzJ4v~kEw2XacH1Ij1Bacw5RB-~x2~6GQOA__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            desc:"자막, 더빙 둘 다 놓칠 수 없지!"
        },
        {   // 사사키와 미야노
            logo:"https://image.laftel.net/carousel/62bb006e-4618-4a68-b743-55821a9e7b41.png?Expires=1706005194&Signature=LcG77R8AbDHBqRqavALiJrPFg9~Hdhh61Z4A3hv1UOzP1G-vSp0nzIlTPOgJMvCtLNNheVEUwjK4puNd69PMasHROPAdMtuSvIm1rJ2FxCTBK-Z9uWfPnX8r0fPKMkZgfsq5JqIXbhlD6Mxu4rowRSoqb2C1447s0DVRFQchXcSIU6UHUl9lt1TW~QK4rz1xrhMPCmBLLAtz7PZtS8ydiIaze2GtZyNl4blMsCE0oL-36hRYxFE0GLEgNgS3sZKF5Mgc7H9LbiZhzmd3a9Il8yDceYWSDAqnBk4kncwFvpPwqbFn1X-75Lnf7p~wy3mg3AXpQoPRaIoApUXlWHagnw__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A", 
            pc_img:"https://image.laftel.net/carousel/3648fa98-d2b2-4b65-87d7-dd0abd10ad04.jpg?Expires=1706005194&Signature=ahndWYSXlM3z75V-zCydpWfTL-wNPNgXLjdeTPak1wa~HplK8NG5FX9p-1L6JRd7p20aUc9Pv2au~kelKkN-jmoF~nHEUNJzHVzMk6Lpfxq4WjUyTNHRJToGMmQCitd~FT3yLjst90LtEVerQXcaP2lvXUlw6n7mIlowoo8k35dISCWk5zzSc9x8BzUMUNHbed36RbAEg4ZaVpsmjDWkfPNXsatpeTQiE7x74WxGyoR2uNWwrUUsp4tcpuJaDgMIC5eV-~zUgdEIoedhnUpHmS~gGeLusEmsK8560ScR7ROcTTpFpM~nrnoaXYOEwCNWVYy1vkqyhZqzsg06ypuc8g__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            mobile_img:"https://image.laftel.net/carousel/851d484a-3a55-4390-8b84-435b84fcdea5.jpg?Expires=1706005194&Signature=fQunciKmAkGcG5Kd0h8zQ6LiB44RaM2z8YzBqY8lkPhe-9afwcQ~WrrIjVPMwFtp3Qq~CyGz9H7PsOr1YVerqUBxkvyl4jT2y6q5-0WdK4Dz69wUbyOx9MbBYa7E6tAGqKaeYkGmJ-GARIAxVXPfZSSJNrk85pga02yYOKYNKENf1l-b13h7CFrKmT-gc3saDblOy9nCniGORinWF~JacqvvhU2Nm0uO4kYmtQvMbIxOWPmAysPYn-WIp5SHm~Y3ehM9PzXEocDAFJCPMBIkFzbBI-1Gj7TPAgcO4p~TiLYvZfu4hBCMHxrhpXtB1OLZRM~vIF2MRlbql5vPjKhc7w__&Key-Pair-Id=APKAJMMAKL567BYWKQ5A",
            desc:"라프텔 멤버십 독점 선공개 & 대여/소장도 20% 할인!"
        },
        
    ];

  return (
    <div className='slider-layout'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{
                "--swiper-pagination-color": "#fff",
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-bullet-size":"15px",
                "--swiper-navigation-size":"22px",
                "--swiper-pagination-bullet-opacity":"0.8",
            }}
        >   
            {animationList.map((item, index)=>(
                <SwiperSlide key={index}>
                    <img className='relative' src={item.pc_img} alt={`Slide ${index + 1}`} />
                    <div className='absolute bottom-20 left-10 max-lg:left-5 max-lg:bottom-3'>
                        <img className='static max-lg:size-1/4 size-2/4' src={item.logo} />
                        <div className='static max-lg:text-xs text-white font-semibold text-xl pt-3'>{item.desc}</div><br />
                        <Button variant='light'>
                            <div className='flex lg:m-2'>
                                <span className='max-lg:text-xs text-xl font-semibold'>보러가기</span>
                                <GrNext className='max-lg:text-[10px] text-lg mt-1' />
                            </div>
                        </Button>
                        <br /><br /><br />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export default HomeSlider;
