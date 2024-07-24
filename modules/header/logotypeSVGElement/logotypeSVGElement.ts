type ArrangeElementsType = (maximumWindowWidth : number) => void

export const ArrangeElements : ArrangeElementsType = (maximumWindowWidth) => {
    if (maximumWindowWidth < 768) {
        logotypeSVGElement.style.width = '140px'
        logotypeSVGElement.style.height = '28px'
        logotypeSVGElement.setAttribute ('viewBox' , '0 0 140 28')
    
        logotypeSVGElementPath1.setAttribute ('d' , 'M36.2348 7.59698V23.6677H33.2076V7.59698H28.2598V5.02466H41.1572V7.59698H36.2348Z')
        logotypeSVGElementPath2.setAttribute ('d' , 'M43.8665 13.5184C44.1634 12.7204 44.5534 12.1304 45.0367 11.7483C45.5285 11.3663 46.1348 11.1753 46.8556 11.1753C47.2457 11.1753 47.6273 11.222 48.0004 11.3154C48.382 11.4088 48.7551 11.5446 49.1197 11.7229L48.1276 14.066C47.8901 13.8962 47.6315 13.7731 47.3516 13.6967C47.0803 13.6118 46.7751 13.5694 46.4359 13.5694C45.5201 13.5694 44.8629 13.9387 44.4644 14.6773C44.0658 15.4074 43.8665 16.6383 43.8665 18.3702V23.6677H41.1064V11.5701H43.8665V13.5184Z')
        logotypeSVGElementPath3.setAttribute ('d' , 'M62.0428 23.6677H59.2827V22.1013C58.7908 22.7975 58.2142 23.3154 57.5528 23.6549C56.8999 23.9945 56.1494 24.1643 55.3015 24.1643C53.597 24.1643 52.2531 23.5828 51.2694 22.4197C50.2942 21.2482 49.8066 19.6479 49.8066 17.6189C49.8066 15.6917 50.307 14.1381 51.3076 12.9581C52.3082 11.7696 53.614 11.1753 55.2251 11.1753C56.2088 11.1753 57.0483 11.3833 57.7436 11.7993C58.4474 12.2068 58.9604 12.7968 59.2827 13.5694V11.5955H62.0428V23.6677ZM59.359 17.5934C59.359 16.3454 59.0664 15.3734 58.4813 14.6773C57.9047 13.9811 57.0949 13.6331 56.0519 13.6331C55.0089 13.6331 54.1864 13.9938 53.5844 14.7154C52.9907 15.4286 52.694 16.4219 52.694 17.6953C52.694 18.9772 52.9823 19.9662 53.5589 20.6624C54.1355 21.3585 54.9495 21.7066 56.001 21.7066C56.9931 21.7066 57.7987 21.3288 58.4177 20.5732C59.0452 19.8177 59.359 18.8244 59.359 17.5934Z')
        logotypeSVGElementPath4.setAttribute ('d' , 'M70.094 24.3934L63.7725 11.5955H66.7872L69.4197 17.6697C69.5047 17.8565 69.6064 18.1367 69.7255 18.5102C69.8439 18.8838 69.9672 19.3294 70.094 19.8473C70.179 19.4822 70.2765 19.1215 70.3866 18.7649C70.5056 18.3998 70.645 18.0348 70.8066 17.6697L73.4265 11.5955H76.4287L70.094 24.3934Z')
        logotypeSVGElementPath5.setAttribute ('d' , 'M89.7838 18.0391H80.1424C80.2106 19.1682 80.5456 20.0511 81.1475 20.6879C81.7494 21.3161 82.5505 21.6302 83.5514 21.6302C84.4417 21.6302 85.1836 21.4434 85.7771 21.0699C86.3706 20.6963 86.8881 20.0936 87.3291 19.2616L89.6564 20.5605C88.9785 21.7745 88.1391 22.6786 87.1382 23.2729C86.1379 23.8672 84.9634 24.1643 83.6149 24.1643C81.6818 24.1643 80.1424 23.5743 78.9979 22.3943C77.8533 21.2142 77.2808 19.6394 77.2808 17.6698C77.2808 15.7766 77.8701 14.223 79.0487 13.0091C80.2357 11.7866 81.7578 11.1753 83.6149 11.1753C85.5569 11.1753 87.0706 11.7314 88.1559 12.8435C89.2412 13.9557 89.7838 15.5135 89.7838 17.517V18.0391ZM86.9222 16.1799C86.8115 15.314 86.4813 14.656 85.9296 14.2061C85.3786 13.7476 84.6242 13.5184 83.6657 13.5184C82.7587 13.5184 82.0294 13.7391 81.4784 14.1806C80.9267 14.622 80.5408 15.2885 80.3207 16.1799H86.9222Z')
        logotypeSVGElementPath6.setAttribute ('d' , 'M92.7983 23.6676V3.92944H95.5582V23.6676H92.7983Z')
        logotypeSVGElementPath7.setAttribute ('d' , 'M99.6411 23.6676V3.92944H102.402V23.6676H99.6411Z')
        logotypeSVGElementPath8.setAttribute ('d' , 'M106.115 6.37441C106.115 5.90748 106.285 5.50423 106.624 5.16465C106.972 4.82507 107.383 4.65527 107.858 4.65527C108.35 4.65527 108.757 4.82082 109.079 5.15191C109.41 5.47452 109.575 5.88201 109.575 6.37441C109.575 6.86681 109.41 7.2828 109.079 7.62239C108.748 7.95348 108.341 8.11903 107.858 8.11903C107.383 8.11903 106.972 7.94923 106.624 7.60964C106.285 7.26156 106.115 6.84982 106.115 6.37441ZM106.484 23.6676V11.5955H109.244V23.6676H106.484Z')
        logotypeSVGElementPath9.setAttribute ('d' , 'M124.546 23.6677H121.786V22.1013C121.294 22.7975 120.717 23.3154 120.056 23.6549C119.403 23.9945 118.653 24.1643 117.805 24.1643C116.1 24.1643 114.756 23.5828 113.773 22.4197C112.798 21.2482 112.31 19.6479 112.31 17.6189C112.31 15.6917 112.81 14.1381 113.811 12.9581C114.812 11.7696 116.118 11.1753 117.728 11.1753C118.712 11.1753 119.552 11.3833 120.247 11.7993C120.951 12.2068 121.464 12.7968 121.786 13.5694V11.5955H124.546V23.6677ZM121.862 17.5934C121.862 16.3454 121.57 15.3734 120.985 14.6773C120.408 13.9811 119.598 13.6331 118.555 13.6331C117.512 13.6331 116.69 13.9938 116.088 14.7154C115.494 15.4286 115.197 16.4219 115.197 17.6953C115.197 18.9772 115.486 19.9662 116.062 20.6624C116.639 21.3585 117.453 21.7066 118.504 21.7066C119.497 21.7066 120.302 21.3288 120.921 20.5732C121.548 19.8177 121.862 18.8244 121.862 17.5934Z')
        logotypeSVGElementPath10.setAttribute ('d' , 'M128.361 23.6677V11.5955H130.956V13.5694C131.508 12.7374 132.156 12.1304 132.902 11.7483C133.648 11.3663 134.556 11.1753 135.625 11.1753C136.523 11.1753 137.287 11.3197 137.914 11.6083C138.55 11.8885 139.046 12.3087 139.402 12.869C139.614 13.2001 139.767 13.5863 139.86 14.0278C139.953 14.4692 140 15.2418 140 16.3454V23.6677H137.214V17.4661C137.214 15.8785 137.019 14.8258 136.629 14.3079C136.247 13.7816 135.565 13.5184 134.581 13.5184C133.937 13.5184 133.361 13.6373 132.852 13.875C132.351 14.1127 131.957 14.4481 131.669 14.881C131.465 15.1697 131.321 15.5432 131.236 16.0016C131.16 16.4516 131.122 17.1732 131.122 18.1664V23.6677H128.361Z')
        logotypeSVGElementPath11.setAttribute ('d' , 'M8.64111 20.1308L12.181 23.6205L15.7208 20.1308L12.181 16.6413L8.64111 20.1308ZM12.181 3.19536V3.2006C11.1678 3.2006 10.1547 3.58192 9.38281 4.34281L9.37928 4.33932C8.60916 5.10021 8.22237 6.10073 8.22237 7.10127C8.22237 8.10353 8.60743 9.10232 9.37569 9.85969H9.38102L12.181 12.6182L14.9792 9.85969H14.9845C15.7581 9.09705 16.1449 8.09827 16.1449 7.10127H16.1395C16.1395 6.10249 15.7528 5.10371 14.9809 4.34281C14.2037 3.57842 13.1906 3.19536 12.181 3.19536ZM17.7613 22.1424L13.2012 26.6378L12.181 27.6436L11.1607 26.6378L6.60064 22.1424L2.04051 26.6378L0 24.6262L10.1422 14.6297L7.34408 11.8713L7.34761 11.8678C6.00797 10.5489 5.33904 8.82244 5.33904 7.10127C5.33904 5.37833 6.00797 3.65364 7.34408 2.33651V2.33301C8.68018 1.01589 10.4314 0.356445 12.181 0.356445V0.361693C13.9341 0.361693 15.6871 1.01938 17.0196 2.33301C18.3557 3.65014 19.0229 5.37658 19.0229 7.10301H19.0176C19.0176 8.8277 18.3504 10.5524 17.0161 11.8695L17.0196 11.873L14.2215 14.6297L24.362 24.6262L22.3214 26.6378L17.7613 22.1424Z')
    }
    else {
        if (maximumWindowWidth < 1152) {
            logotypeSVGElement.style.width = '194px'
            logotypeSVGElement.style.height = '37px'
            logotypeSVGElement.setAttribute ('viewBox' , '0 0 194 37')
    
            logotypeSVGElementPath1.setAttribute ('d' , 'M54.7057 11.0912V32.6645H50.642V11.0912H44V7.6381H61.3136V11.0912H54.7057Z')
            logotypeSVGElementPath2.setAttribute ('d' , 'M64.9505 19.0402C65.3489 17.9689 65.8725 17.1769 66.5213 16.664C67.1816 16.1512 67.9954 15.8948 68.963 15.8948C69.4866 15.8948 69.9989 15.9574 70.4997 16.0828C71.012 16.2082 71.5128 16.3905 72.0023 16.6298L70.6705 19.7752C70.3517 19.5473 70.0046 19.3821 69.6289 19.2795C69.2647 19.1655 68.8549 19.1085 68.3995 19.1085C67.1702 19.1085 66.288 19.6043 65.753 20.5958C65.218 21.5759 64.9505 23.2283 64.9505 25.5532V32.6645H61.2453V16.4247H64.9505V19.0402Z')
            logotypeSVGElementPath3.setAttribute ('d' , 'M89.35 32.6645H85.6448V30.5619C84.9846 31.4964 84.2106 32.1916 83.3227 32.6474C82.4462 33.1033 81.4388 33.3312 80.3005 33.3312C78.0125 33.3312 76.2083 32.5505 74.8879 30.9892C73.5788 29.4165 72.9243 27.2683 72.9243 24.5446C72.9243 21.9576 73.5959 19.8721 74.9391 18.288C76.2823 16.6925 78.0353 15.8948 80.1981 15.8948C81.5185 15.8948 82.6454 16.174 83.5788 16.7324C84.5236 17.2794 85.2123 18.0715 85.6448 19.1085V16.4589H89.35V32.6645ZM85.7473 24.5104C85.7473 22.8351 85.3546 21.5303 84.5692 20.5958C83.7951 19.6613 82.708 19.194 81.3079 19.194C79.9078 19.194 78.8036 19.6784 77.9954 20.647C77.1986 21.6043 76.8002 22.9377 76.8002 24.6472C76.8002 26.368 77.1873 27.6957 77.9613 28.6302C78.7353 29.5647 79.8281 30.032 81.2396 30.032C82.5714 30.032 83.6528 29.5248 84.4838 28.5105C85.3261 27.4963 85.7473 26.1629 85.7473 24.5104Z')
            logotypeSVGElementPath4.setAttribute ('d' , 'M100.158 33.6389L91.6722 16.4589H95.7188L99.2533 24.613C99.3671 24.8637 99.5037 25.2398 99.6631 25.7412C99.8224 26.2427 99.9875 26.841 100.158 27.5361C100.272 27.0461 100.403 26.5618 100.551 26.0831C100.71 25.5931 100.898 25.103 101.114 24.613L104.632 16.4589H108.661L100.158 33.6389Z')
            logotypeSVGElementPath5.setAttribute ('d' , 'M126.59 25.1087H113.647C113.738 26.6244 114.188 27.8097 114.996 28.6644C115.804 29.5077 116.88 29.9294 118.223 29.9294C119.418 29.9294 120.414 29.6787 121.211 29.1772C122.008 28.6758 122.702 27.8666 123.294 26.7498L126.419 28.4934C125.508 30.1231 124.381 31.3368 123.038 32.1346C121.695 32.9323 120.118 33.3312 118.308 33.3312C115.713 33.3312 113.647 32.5392 112.11 30.9551C110.574 29.371 109.805 27.2569 109.805 24.613C109.805 22.0716 110.596 19.9861 112.179 18.3564C113.772 16.7153 115.816 15.8948 118.308 15.8948C120.915 15.8948 122.947 16.6412 124.404 18.1341C125.861 19.6271 126.59 21.7183 126.59 24.4078V25.1087ZM122.748 22.6129C122.6 21.4505 122.156 20.5673 121.416 19.9633C120.676 19.3479 119.663 19.0402 118.377 19.0402C117.159 19.0402 116.18 19.3365 115.44 19.9291C114.7 20.5217 114.182 21.4163 113.886 22.6129H122.748Z')
            logotypeSVGElementPath6.setAttribute ('d' , 'M130.636 32.6645V6.16797H134.341V32.6645H130.636Z')
            logotypeSVGElementPath7.setAttribute ('d' , 'M139.822 32.6645V6.16797H143.528V32.6645H139.822Z')
            logotypeSVGElementPath8.setAttribute ('d' , 'M148.513 9.45012C148.513 8.82332 148.741 8.28199 149.196 7.82614C149.663 7.37029 150.215 7.14236 150.853 7.14236C151.513 7.14236 152.059 7.36459 152.492 7.80905C152.936 8.24211 153.158 8.78913 153.158 9.45012C153.158 10.1111 152.936 10.6695 152.492 11.1254C152.048 11.5698 151.501 11.7921 150.853 11.7921C150.215 11.7921 149.663 11.5641 149.196 11.1083C148.741 10.641 148.513 10.0883 148.513 9.45012ZM149.009 32.6645V16.4589H152.714V32.6645H149.009Z')
            logotypeSVGElementPath9.setAttribute ('d' , 'M173.254 32.6645H169.549V30.5619C168.889 31.4964 168.115 32.1916 167.227 32.6474C166.351 33.1033 165.343 33.3312 164.205 33.3312C161.917 33.3312 160.113 32.5505 158.792 30.9892C157.483 29.4165 156.829 27.2683 156.829 24.5446C156.829 21.9576 157.5 19.8721 158.843 18.288C160.187 16.6925 161.94 15.8948 164.102 15.8948C165.423 15.8948 166.55 16.174 167.483 16.7324C168.428 17.2794 169.117 18.0715 169.549 19.1085V16.4589H173.254V32.6645ZM169.652 24.5104C169.652 22.8351 169.259 21.5303 168.474 20.5958C167.699 19.6613 166.612 19.194 165.212 19.194C163.812 19.194 162.708 19.6784 161.9 20.647C161.103 21.6043 160.705 22.9377 160.705 24.6472C160.705 26.368 161.092 27.6957 161.866 28.6302C162.64 29.5647 163.732 30.032 165.144 30.032C166.476 30.032 167.557 29.5248 168.388 28.5105C169.231 27.4963 169.652 26.1629 169.652 24.5104Z')
            logotypeSVGElementPath10.setAttribute ('d' , 'M178.377 32.6645V16.4589H181.86V19.1085C182.6 17.9917 183.471 17.1769 184.472 16.664C185.474 16.1512 186.692 15.8948 188.126 15.8948C189.333 15.8948 190.357 16.0885 191.2 16.476C192.053 16.8521 192.719 17.4162 193.197 18.1683C193.482 18.6128 193.687 19.1313 193.812 19.7239C193.937 20.3166 194 21.3536 194 22.8351V32.6645H190.261V24.3395C190.261 22.2083 189.999 20.7952 189.475 20.1C188.963 19.3934 188.047 19.0402 186.726 19.0402C185.861 19.0402 185.087 19.1997 184.404 19.5188C183.732 19.8379 183.203 20.2881 182.816 20.8693C182.543 21.2568 182.349 21.7582 182.236 22.3736C182.133 22.9776 182.082 23.9463 182.082 25.2797V32.6645H178.377Z')
            logotypeSVGElementPath11.setAttribute ('d' , 'M11.3503 26.17L16 30.7537L20.6497 26.17L16 21.5863L11.3503 26.17ZM16 3.92478V3.93167C14.6692 3.93167 13.3384 4.43254 12.3245 5.43199L12.3199 5.4274C11.3084 6.42685 10.8003 7.74106 10.8003 9.05528C10.8003 10.3718 11.306 11.6837 12.3152 12.6786H12.3222L16 16.3019L19.6755 12.6786H19.6824C20.6986 11.6768 21.2067 10.3649 21.2067 9.05528H21.1997C21.1997 7.74336 20.6916 6.43144 19.6778 5.43199C18.657 4.42795 17.3261 3.92478 16 3.92478ZM23.3299 28.8122L17.3401 34.717L16 36.0381L14.6599 34.717L8.67007 28.8122L2.68026 34.717L0 32.0748L13.3221 18.9441L9.64661 15.3208L9.65127 15.3162C7.89162 13.5838 7.01296 11.3161 7.01296 9.05528C7.01296 6.79216 7.89162 4.52674 9.64661 2.79666V2.79207C11.4016 1.06199 13.702 0.195801 16 0.195801V0.202694C18.3027 0.202694 20.6054 1.06658 22.3557 2.79207C24.1107 4.52215 24.987 6.78986 24.987 9.05758H24.98C24.98 11.323 24.1037 13.5884 22.3511 15.3185L22.3557 15.3231L18.6803 18.9441L32 32.0748L29.3197 34.717L23.3299 28.8122Z')
        }
        else {
            logotypeSVGElement.style.width = '234px'
            logotypeSVGElement.style.height = '46px'
            logotypeSVGElement.setAttribute ('viewBox' , '0 0 234 46')
    
            logotypeSVGElementPath1.setAttribute ('d' , 'M60.5641 12.2979V39.1589H55.5044V12.2979H47.2344V7.99844H68.7916V12.2979H60.5641Z')
            logotypeSVGElementPath2.setAttribute ('d' , 'M73.3199 22.1952C73.816 20.8614 74.4679 19.8752 75.2758 19.2366C76.0978 18.5981 77.1112 18.2788 78.3159 18.2788C78.9679 18.2788 79.6057 18.3569 80.2293 18.513C80.8671 18.6691 81.4907 18.8961 82.1001 19.1941L80.4419 23.1104C80.045 22.8266 79.6128 22.6209 79.145 22.4932C78.6915 22.3513 78.1813 22.2803 77.6144 22.2803C76.0837 22.2803 74.9853 22.8976 74.3191 24.1321C73.653 25.3524 73.3199 27.4099 73.3199 30.3046V39.1589H68.7066V18.9387H73.3199V22.1952Z')
            logotypeSVGElementPath3.setAttribute ('d' , 'M103.7 39.1589H99.0866V36.5409C98.2645 37.7045 97.3008 38.5701 96.1953 39.1376C95.1039 39.7052 93.8496 39.989 92.4323 39.989C89.5835 39.989 87.3371 39.017 85.693 37.073C84.0631 35.1149 83.2481 32.4401 83.2481 29.0488C83.2481 25.8277 84.0844 23.231 85.7568 21.2587C87.4292 19.2721 89.6119 18.2788 92.3047 18.2788C93.9488 18.2788 95.352 18.6265 96.5141 19.3218C97.6905 20.0029 98.548 20.9891 99.0866 22.2803V18.9812H103.7V39.1589ZM99.2141 29.0062C99.2141 26.9203 98.7251 25.2956 97.7472 24.1321C96.7834 22.9685 95.4299 22.3868 93.6866 22.3868C91.9433 22.3868 90.5685 22.9898 89.5623 24.1959C88.5701 25.3879 88.0741 27.0481 88.0741 29.1765C88.0741 31.3191 88.556 32.9722 89.5197 34.1358C90.4835 35.2993 91.8441 35.8811 93.6016 35.8811C95.2598 35.8811 96.6063 35.2497 97.6409 33.9868C98.6897 32.7239 99.2141 31.0637 99.2141 29.0062Z')
            logotypeSVGElementPath4.setAttribute ('d' , 'M117.157 40.3721L106.591 18.9812H111.63L116.03 29.1339C116.172 29.4461 116.342 29.9144 116.541 30.5387C116.739 31.1631 116.945 31.908 117.157 32.7736C117.299 32.1634 117.462 31.5604 117.646 30.9644C117.845 30.3542 118.078 29.7441 118.348 29.1339L122.727 18.9812H127.745L117.157 40.3721Z')
            logotypeSVGElementPath5.setAttribute ('d' , 'M150.067 29.7512H133.952C134.066 31.6384 134.626 33.1141 135.632 34.1784C136.638 35.2284 137.977 35.7534 139.65 35.7534C141.138 35.7534 142.378 35.4412 143.37 34.8169C144.362 34.1925 145.227 33.1851 145.964 31.7945L149.854 33.9655C148.721 35.9946 147.318 37.5058 145.645 38.4991C143.973 39.4924 142.01 39.989 139.756 39.989C136.525 39.989 133.952 39.0028 132.039 37.0305C130.126 35.0581 129.169 32.4259 129.169 29.1339C129.169 25.9696 130.154 23.3729 132.124 21.3438C134.108 19.3005 136.652 18.2788 139.756 18.2788C143.002 18.2788 145.532 19.2083 147.346 21.0671C149.16 22.926 150.067 25.5298 150.067 28.8785V29.7512ZM145.284 26.6437C145.099 25.1963 144.547 24.0966 143.625 23.3446C142.704 22.5783 141.443 22.1952 139.841 22.1952C138.325 22.1952 137.106 22.5641 136.185 23.302C135.263 24.0398 134.618 25.1537 134.25 26.6437H145.284Z')
            logotypeSVGElementPath6.setAttribute ('d' , 'M155.106 39.1589V6.16797H159.719V39.1589H155.106Z')
            logotypeSVGElementPath7.setAttribute ('d' , 'M166.543 39.1589V6.16797H171.157V39.1589H166.543Z')
            logotypeSVGElementPath8.setAttribute ('d' , 'M177.364 10.2546C177.364 9.47416 177.648 8.80015 178.215 8.23256C178.796 7.66498 179.483 7.38118 180.277 7.38118C181.099 7.38118 181.779 7.65788 182.318 8.21128C182.871 8.75049 183.147 9.43159 183.147 10.2546C183.147 11.0776 182.871 11.7729 182.318 12.3405C181.765 12.8939 181.085 13.1706 180.277 13.1706C179.483 13.1706 178.796 12.8868 178.215 12.3192C177.648 11.7374 177.364 11.0492 177.364 10.2546ZM177.981 39.1589V18.9812H182.594V39.1589H177.981Z')
            logotypeSVGElementPath9.setAttribute ('d' , 'M208.17 39.1589H203.556V36.5409C202.734 37.7045 201.77 38.5701 200.665 39.1376C199.574 39.7052 198.319 39.989 196.902 39.989C194.053 39.989 191.807 39.017 190.163 37.073C188.533 35.1149 187.718 32.4401 187.718 29.0488C187.718 25.8277 188.554 23.231 190.227 21.2587C191.899 19.2721 194.082 18.2788 196.774 18.2788C198.419 18.2788 199.822 18.6265 200.984 19.3218C202.16 20.0029 203.018 20.9891 203.556 22.2803V18.9812H208.17V39.1589ZM203.684 29.0062C203.684 26.9203 203.195 25.2956 202.217 24.1321C201.253 22.9685 199.9 22.3868 198.156 22.3868C196.413 22.3868 195.038 22.9898 194.032 24.1959C193.04 25.3879 192.544 27.0481 192.544 29.1765C192.544 31.3191 193.026 32.9722 193.989 34.1358C194.953 35.2993 196.314 35.8811 198.071 35.8811C199.73 35.8811 201.076 35.2497 202.111 33.9868C203.159 32.7239 203.684 31.0637 203.684 29.0062Z')
            logotypeSVGElementPath10.setAttribute ('d' , 'M214.547 39.1589V18.9812H218.884V22.2803C219.806 20.8897 220.89 19.8752 222.137 19.2366C223.384 18.5981 224.901 18.2788 226.687 18.2788C228.189 18.2788 229.465 18.5201 230.513 19.0025C231.576 19.4708 232.406 20.1732 233.001 21.1097C233.355 21.6631 233.61 22.3087 233.766 23.0466C233.922 23.7844 234 25.0757 234 26.9203V39.1589H229.344V28.7934C229.344 26.1399 229.018 24.3804 228.366 23.5148C227.728 22.6351 226.588 22.1952 224.943 22.1952C223.866 22.1952 222.903 22.3938 222.052 22.7912C221.216 23.1885 220.557 23.749 220.075 24.4726C219.735 24.9551 219.494 25.5794 219.352 26.3457C219.225 27.0977 219.161 28.3038 219.161 29.964V39.1589H214.547Z')
            logotypeSVGElementPath11.setAttribute ('d' , 'M14.443 33.2473L20.3596 39.08L26.2762 33.2473L20.3596 27.4147L14.443 33.2473ZM20.3596 4.94084V4.94961C18.6662 4.94961 16.9728 5.58696 15.6827 6.85873L15.6768 6.85289C14.3896 8.12466 13.7431 9.79697 13.7431 11.4693C13.7431 13.1445 14.3867 14.8139 15.6708 16.0798H15.6797L20.3596 20.6904L25.0366 16.0798H25.0455C26.3385 14.8051 26.985 13.1357 26.985 11.4693H26.9761C26.9761 9.7999 26.3296 8.13051 25.0395 6.85873C23.7405 5.58111 22.0471 4.94084 20.3596 4.94084ZM29.6868 36.6095L22.0649 44.1232L20.3596 45.8043L18.6543 44.1232L11.0325 36.6095L3.41057 44.1232L0 40.761L16.952 24.0526L12.2751 19.442L12.281 19.4362C10.0419 17.2317 8.92383 14.3461 8.92383 11.4693C8.92383 8.58952 10.0419 5.70683 12.2751 3.50534V3.49949C14.5083 1.29801 17.4354 0.195801 20.3596 0.195801V0.204572C23.2898 0.204572 26.2199 1.30385 28.4471 3.49949C30.6803 5.70098 31.7954 8.58659 31.7954 11.4722H31.7865C31.7865 14.3549 30.6714 17.2376 28.4412 19.4391L28.4471 19.4449L23.7702 24.0526L40.7193 40.761L37.3087 44.1232L29.6868 36.6095Z')
        }
    }
}

export const logotypeSVGElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'svg')
logotypeSVGElement.setAttribute ('xmlns' , 'http://www.w3.org/2000/svg')

logotypeSVGElement.style.gridArea = 'logotypeSVGElement'

const logotypeSVGElementPath1 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath1.style.fill = 'white'
const logotypeSVGElementPath2 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath2.style.fill = 'white'
const logotypeSVGElementPath3 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath3.style.fill = 'white'
const logotypeSVGElementPath4 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath4.style.fill = 'white'
const logotypeSVGElementPath5 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath5.style.fill = 'white'
const logotypeSVGElementPath6 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath6.style.fill = 'white'
const logotypeSVGElementPath7 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath7.style.fill = 'white'
const logotypeSVGElementPath8 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath8.style.fill = 'white'
const logotypeSVGElementPath9 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath9.style.fill = 'white'
const logotypeSVGElementPath10 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath10.style.fill = 'white'
const logotypeSVGElementPath11 : SVGPathElement = document.createElementNS ('http://www.w3.org/2000/svg' , 'path')
logotypeSVGElementPath11.style.fill = 'white'

ArrangeElements (innerWidth)

logotypeSVGElement.append (
    logotypeSVGElementPath1 ,
    logotypeSVGElementPath2 ,
    logotypeSVGElementPath3 ,
    logotypeSVGElementPath4 ,
    logotypeSVGElementPath5 ,
    logotypeSVGElementPath6 ,
    logotypeSVGElementPath7 ,
    logotypeSVGElementPath8 ,
    logotypeSVGElementPath9 ,
    logotypeSVGElementPath10 ,
    logotypeSVGElementPath11)