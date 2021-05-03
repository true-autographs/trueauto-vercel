import React, { FC } from 'react'
import { ContentSection, ButtonRolling } from '@components/ui'
import cn from 'classnames'
import Image from 'next/image'
import { urlFor } from 'lib/sanity/urlFor'
import s from './Authenticity.module.scss'

export const Authenticity = () => (
  <ContentSection className={s.container} el="section">
    <div className={s.content}>
      <div className={s.searchCard}>
        <h1>Authenticity Search</h1>
        <h2>
          Enter the code from your item's authenticity sticker in the form
          below. If it matches a record in our system, details about your item
          will appear below.
        </h2>
        <form action="" method="get" class="form-example">
          <div class="form-example">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="form-example">
            <input type="submit" value="Subscribe!" />
          </div>
        </form>
        <p>
          If you don't receive a result but have just purchased the product, you
          may need to wait for it to be reflected in our records.
        </p>
      </div>
    </div>
  </ContentSection>
)
