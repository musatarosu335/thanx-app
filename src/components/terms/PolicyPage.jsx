import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 16px;
  font-size: 0.8rem;
`;

const Ol = styled.ol`
  padding-left: 24px;
`;

const List = styled.li`
  list-style: decimal;
`;

const PolicyPage = () => (
  <Container>
    <h2>プライバシーポリシー</h2>
    <p>
      運営者は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）におけるプライバシー情報の取扱いについて，
      以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
      本サービスのご利用をもって、ユーザが本ポリシーに同意したものとみなします。
    </p>
    <h3>第1条（プライバシー情報）</h3>
    <Ol>
      <List>
        プライバシー情報のうち「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，
        生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報を指します。
      </List>
      <List>
        プライバシー情報のうち「履歴情報および特性情報」とは，上記に定める「個人情報」以外のものをいい，
        ご利用いただいたサービスやご購入いただいた商品，ご覧になったページや広告の履歴，
        ユーザーが検索された検索キーワード，ご利用日時，ご利用の方法，ご利用環境，郵便番号や性別，
        職業，年齢，ユーザーのIPアドレス，クッキー情報，位置情報，端末の個体識別情報などを指します。
      </List>
    </Ol>
    <h3>第２条（プライバシー情報の収集方法）</h3>
    <p>
      運営者は、ユーザーが本サービスを利用した範囲において、会員の個人情報を取得します。
      その他の個人情報の取得については、適正かつ公正な方法によって行い、
      ユーザーの意思に反する不正な方法により取得いたしません。
    </p>
    <h3>第３条（個人情報を収集・利用する目的）</h3>
    <p>運営者が個人情報を収集・利用する目的は，以下のとおりです。</p>
    <Ol>
      <List>本サービスを提供するため</List>
      <List>ログイン時における本人認証、その他サービスの運営に必要な管理のため</List>
      <List>本サービスの改良・新サービスの提供及び広告掲載・配信等の判断資料とするため</List>
      <List>会員の利用形態等の統計データを作成するため</List>
      <List>本サービスの利用規約に違反する行為への対応及び当該違反行為の防止のため</List>
      <List>本サービスに関する規約、ポリシー等の変更等をお客様に通知するため</List>
      <List>サービスに関するご案内、お問い合わせ等への対応のため</List>
      <List>各種会員制サービス、その他各種サービスの案内をお届けするため</List>
      <List>上記の利用目的に付随する目的</List>
    </Ol>
    <h3>第４条（個人情報の第三者提供）</h3>
    <p>
      運営者は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
    </p>
    <Ol>
      <List>
        運営者が前条に定める利用目的の達成に必要な範囲内において個人情報等の取扱いを委託する場合
      </List>
      <List>
        合併その他の事由による事業の承継に伴って個人情報等が提供される場合
      </List>
      <List>
        国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、
        本人の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合
      </List>
      <List>
        その他、個人情報保護法その他の法令で認められる場合
      </List>
    </Ol>
    <h3>第５条（個人情報の開示・訂正、削除）</h3>
    <p>
      運営者は、ユーザーから当該個人の個人情報の開示を求められた場合は、その開示に応じます。
      ただし、個人情報を開示することにより以下の各号のどれかに該当する場合、
      運営者はその全部または一部を開示しないことができます。
    </p>
    <Ol>
      <List>ユーザー本人または第三者の生命・身体・財産その他の権利を害するおそれがある場合</List>
      <List>業務遂行に影響及ぼすおそれがある場合</List>
      <List>法令に違反する場合</List>
      <List>個人情報に関するお問い合わせ</List>
    </Ol>
    <h3>第6条（プライバシーポリシーの変更）</h3>
    <Ol>
      <List>本ポリシーの内容は，ユーザーに通知することなく，変更することができるものとします。</List>
      <List>運営者が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</List>
    </Ol>
  </Container>
);

export default PolicyPage;