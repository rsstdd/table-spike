import * as React from 'React';

const socksSizeGuide = () => (
  <div className="toggle-elem socks">
    <div className='size-chart-wrapper'>
      <div className='size-chart-outer'>
        <div className='size-chart-scroll'>
          <table className='size-chart socks-size-chart'>
            <tr>
              <th rowSpan='2'>lululemon size</th>
              <td className='spacer'></td>
              <td colSpan='5' className='highlight'>S/M</td>
              <td colSpan='6' className='highlight'>M/L</td>
            </tr>
            <tr>
              <td className='spacer'></td>
              <td colSpan='2' className='spacer'></td>
              <td colSpan='6' className='highlight'>O/S</td>
              <td colSpan='3' className='spacer'></td>
            </tr>
            <tr>
              <th rowSpan='6'>shoe size</th>
              <td>north america</td>
              <td>5</td>
              <td>5.5</td>
              <td>6</td>
              <td>6.5</td>
              <td>7</td>
              <td>7.5</td>
              <td>8</td>
              <td>8.5</td>
              <td>9</td>
              <td>9.5</td>
              <td>10</td>
            </tr>
            <tr>
              <td>europe</td>
              <td>35</td>
              <td>35.5</td>
              <td>36</td>
              <td>37</td>
              <td>37.5</td>
              <td>38</td>
              <td>38.5</td>
              <td>39</td>
              <td>40</td>
              <td>41</td>
              <td>42</td>
            </tr>
            <tr>
              <td>UK</td>
              <td>2.5</td>
              <td>3</td>
              <td>3.5</td>
              <td>4</td>
              <td>4.5</td>
              <td>5</td>
              <td>5.5</td>
              <td>6</td>
              <td>6.5</td>
              <td>7</td>
              <td>7.5</td>
            </tr>
            <tr>
                <td>china</td>
                <td>22.8</td>
                <td>23.1</td>
                <td>23.5</td>
                <td>23.8</td>
                <td>24.1</td>
                <td>24.5</td>
                <td>24.8</td>
                <td>25.1</td>
                <td>25.4</td>
                <td>25.7</td>
                <td>26</td>
            </tr>
            <tr>
              <td>japan</td>
              <td>21</td>
              <td>21.5</td>
              <td>22</td>
              <td>22.5</td>
              <td>23</td>
              <td>23.5</td>
              <td>24</td>
              <td>24.5</td>
              <td>25</td>
              <td>25.5</td>
              <td>26</td>
            </tr>
            <tr>
              <td>korea</td>
              <td>228</td>
              <td>231</td>
              <td>235</td>
              <td>238</td>
              <td>241</td>
              <td>245</td>
              <td>248</td>
              <td>251</td>
              <td>254</td>
              <td>257</td>
              <td>260</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default socksSizeGuide;
